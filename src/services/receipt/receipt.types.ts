export interface IUploadReceiptResponse {
    code: number;
    message: string;
    data: {
        id: number;
        imageUri: string;
        category: string;
        description: string;
        purchaseDate: string;
        price: number;
        checked: boolean;
    };
}
