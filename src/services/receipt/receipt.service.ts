import { api } from "@/config/axios";

import { IUpdateReceiptRequest, IUploadReceiptResponse } from "./receipt.types";

export const receiptService = {
    uploadReceipt: async (groupId: number, file: Blob) => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await api.post<IUploadReceiptResponse>(`/receipts/${groupId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data.data;
    },

    updateReceipt: async (receiptId: number, body: IUpdateReceiptRequest) => {
        const response = await api.put(`/receipts/${receiptId}`, body);
        return response.data;
    },

    deleteReceipt: async (receiptId: number) => {
        const response = await api.delete(`/receipts/${receiptId}`);
        return response.data;
    },
};
