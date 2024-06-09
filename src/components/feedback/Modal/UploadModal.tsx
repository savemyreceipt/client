/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";

import { motion } from "framer-motion";

import { Card } from "@/components/display/Cards/style";
import { Button } from "@/components/forms/Button";
import { Input } from "@/components/forms/Input";
import { Label } from "@/components/forms/Label";
import { Textarea } from "@/components/forms/TextArea";

import { useReceiptUpload } from "@/hooks/receipt/useReceiptUpload";

import { UploadIcon } from "@/assets/UploadIcon";

import { useUploadModal } from "@/context/UploadModalContext";

export const UploadModal = () => {
    const { setIsModalOpened } = useUploadModal();

    const {
        categoryRef,
        descriptionRef,
        purchaseDateRef,
        imageInput,
        filePreview,
        handleFileChange,
        handleFileUpload,
        handleSubmit,
    } = useReceiptUpload();

    const handleCancelBtnClick = useCallback(() => {
        setIsModalOpened(false);
    }, [setIsModalOpened]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm"
        >
            <Card className="w-full max-w-4xl m-5">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="flex flex-col justify-center items-center">
                        {!filePreview ? (
                            <div
                                className="w-full h-full min-h-[200px] flex flex-col justify-center items-center hover:cursor-pointer"
                                onClick={handleFileUpload}
                            >
                                <UploadIcon className="w-[50px] h-[50px]" />
                                <p>클릭하여 이미지 업로드</p>
                                <input type="file" className="hidden" onChange={handleFileChange} ref={imageInput} />
                            </div>
                        ) : (
                            <img
                                alt="Receipt"
                                className="md:aspect-[3/4] w-full rounded-lg object-cover aspect-[16/9]"
                                src={filePreview as string}
                            />
                        )}
                    </div>
                    <form className="flex flex-col p-3 gap-3 md:gap-6 justify-around" onSubmit={handleSubmit}>
                        <div className="mx-2">
                            <h1 className="text-2xl font-bold">영수증 업로드</h1>
                            <p className="text-gray-800">업로드 전 영수증 정보를 확인 해 주세요</p>
                        </div>

                        <div className="grid gap-1">
                            <Input id="category" placeholder="카테고리" ref={categoryRef} />
                            <Input id="description" placeholder="설명" ref={descriptionRef} />
                        </div>
                        <div className="grid gap-2">
                            <Textarea id="memo" placeholder="Memo" rows={3} />
                            <div className="flex items-center justify-between">
                                <Label htmlFor="purchaseDate" className="mx-3">
                                    날짜
                                </Label>
                                <Input id="purchaseDate" type="date" className="w-[200px]" ref={purchaseDateRef} />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="price" className="mx-3">
                                    가격
                                </Label>
                                <Input id="price" type="number" className="w-[200px]" />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={handleCancelBtnClick}>
                                취소
                            </Button>
                            <Button type="submit">저장</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </motion.div>
    );
};
