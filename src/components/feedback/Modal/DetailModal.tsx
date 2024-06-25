/* eslint-disable @next/next/no-img-element */
import { FormEvent, useCallback } from "react";
import { toast } from "react-toastify";

import { ModalFade } from "@/components/animations/ModalFade";
import { Card } from "@/components/display/Cards/Card";
import { Button } from "@/components/forms/Button";
import { Input } from "@/components/forms/Input";
import { Label } from "@/components/forms/Label";
import { Textarea } from "@/components/forms/TextArea";

import { useReceiptDetail } from "@/hooks/receipt/useReceipt";

import { receiptService } from "@/services/receipt/receipt.service";

import { queryClient } from "@/config/query";

import { useDetailModal } from "@/context/DetailModalContext";

export const DetailModal = () => {
    const { data } = useReceiptDetail();
    const { setIsModalOpened } = useDetailModal();

    const handleClose = useCallback(() => {
        setIsModalOpened(false);
    }, [setIsModalOpened]);

    const handleDelete = useCallback(
        (e: FormEvent) => {
            e.preventDefault();

            const request = receiptService.deleteReceipt(Number(data?.id));
            toast
                .promise(request, {
                    success: "영수증이 삭제되었습니다",
                    pending: "영수증 삭제중입니다",
                    error: "영수증 삭제 실패",
                })
                .catch((e) => {
                    console.log(e);
                })
                .then(() => {
                    queryClient.invalidateQueries({
                        queryKey: [`/groups/:groupId/receipts`],
                    });
                    setIsModalOpened(false);
                });
        },
        [data?.id, setIsModalOpened],
    );

    return (
        <ModalFade>
            <Card className="w-full max-w-4xl m-5">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            alt="Receipt"
                            className="md:aspect-[3/4] w-full rounded-lg object-cover aspect-[16/9]"
                            src={data?.imageUri}
                        />
                    </div>
                    <form className="flex flex-col p-3 gap-3 md:gap-6 justify-around">
                        <div className="mx-2">
                            <h1 className="text-2xl font-bold">상세 영수증 정보</h1>
                            <p className="text-gray-800">{data?.purchaseDate} 에 업로드된 상세 영수증 정보입니다</p>
                        </div>

                        <div className="grid gap-1">
                            <Input id="category" placeholder="카테고리" disabled value={data?.category} />
                            <Input id="description" placeholder="설명" disabled value={data?.description} />
                        </div>
                        <div className="grid gap-2">
                            <Textarea id="memo" placeholder="Memo" rows={3} disabled value={data?.memo} />
                            <div className="flex items-center justify-between">
                                <Label htmlFor="purchaseDate" className="mx-3">
                                    날짜
                                </Label>
                                <Input
                                    id="purchaseDate"
                                    type="date"
                                    className="w-[200px] disabled:text-black"
                                    disabled
                                    value={data?.purchaseDate}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="price" className="mx-3">
                                    가격
                                </Label>
                                <Input id="price" type="number" className="w-[200px]" disabled value={data?.price} />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={handleClose}>
                                닫기
                            </Button>
                            <Button variant="destructive" onClick={handleDelete}>
                                삭제
                            </Button>
                        </div>
                    </form>
                </div>
            </Card>
        </ModalFade>
    );
};
