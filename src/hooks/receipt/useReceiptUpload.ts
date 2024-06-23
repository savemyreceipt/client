import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

import { queryClient } from "@/pages/_app";

import { receiptService } from "@/services/receipt/receipt.service";
import { IUploadReceiptResponse } from "@/services/receipt/receipt.types";

import { useUploadModal } from "@/context/UploadModalContext";

export const useReceiptUpload = (maxFileSize: number = 5 * 1024 * 1024) => {
    const router = useRouter();
    const { setIsModalOpened } = useUploadModal();

    const memoRef = useRef<HTMLTextAreaElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const purchaseDateRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    const imageInput = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string | ArrayBuffer | null>(null);

    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [data, setData] = useState<IUploadReceiptResponse["data"] | null>(null);

    const handleFileChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files as FileList;

            if (file[0].size > maxFileSize) {
                toast.error(`이미지 파일의 크기는 ${maxFileSize / (1024 * 1024)} MB 이하여야 합니다`);
                return;
            }
            setFile(file[0]);

            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result);
                const request = receiptService.uploadReceipt(Number(router.query.id), file[0] as File);
                setIsUploading(true);
                toast
                    .promise(request, {
                        success: "영수증 분석 성공!",
                        pending: "영수증 분석 중입니다..",
                        error: "이미지 분석에 실패하였습니다",
                    })
                    .then((data) => {
                        if (
                            !(
                                categoryRef.current &&
                                descriptionRef.current &&
                                purchaseDateRef.current &&
                                priceRef.current
                            )
                        )
                            return;
                        setData(data);
                        categoryRef.current.value = data.category;
                        descriptionRef.current.value = data.description;
                        purchaseDateRef.current.value = data.purchaseDate;
                        priceRef.current.value = data.price.toString();
                    })
                    .finally(() => {
                        setIsUploading(false);
                    });
            };
            reader.readAsDataURL(file[0] as Blob);
        },
        [maxFileSize, router.query.id],
    );

    const handleFileUpload = useCallback(() => {
        imageInput.current?.click();
    }, []);

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();
            if (isUploading) return;
            const request = receiptService.updateReceipt(data?.id as number, {
                category: categoryRef.current?.value as string,
                description: descriptionRef.current?.value as string,
                memo: memoRef.current?.value as string,
                purchaseDate: purchaseDateRef.current?.value as string,
                price: Number(priceRef.current?.value as string),
            });
            toast
                .promise(request, {
                    success: "영수증 업로드 완료!",
                    pending: "영수증 업로드 중입니다",
                    error: "영수증 업로드 실패, 잠시 후 다시 시도해주세요",
                })
                .then(() => {
                    queryClient.invalidateQueries({
                        queryKey: [`/groups/:groupId/receipts`, `/groups/${Number(router.query.id)}`],
                    });
                    queryClient.invalidateQueries({
                        queryKey: [`/groups/:groupId`, `/groups/${Number(router.query.id)}`],
                    });
                })
                .catch(() => {
                    receiptService.deleteReceipt(data?.id as number);
                })
                .finally(() => {
                    setIsModalOpened(false);
                });
        },
        [isUploading, data?.id, setIsModalOpened, router.query.id],
    );

    const handleCancel = useCallback(async () => {
        if (isUploading) return;
        receiptService
            .deleteReceipt(data?.id as number)
            .catch((e) => {
                toast.error("영수증 업로드가 취소되었습니다");
            })
            .finally(() => {
                setIsModalOpened(false);
            });
    }, [setIsModalOpened, isUploading, data?.id]);

    return {
        memoRef,
        priceRef,
        categoryRef,
        descriptionRef,
        purchaseDateRef,
        imageInput,
        file,
        filePreview,
        handleFileChange,
        handleFileUpload,
        handleSubmit,
        handleCancel,
    };
};
