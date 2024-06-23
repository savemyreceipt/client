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
export interface IUpdateReceiptRequest {
    category: string;
    description: string;
    memo: string;
    purchaseDate: string;
    price: number;
}

export interface IJoinGroupResponse {
    code: number;
    message: string;
    data: null;
}

export interface IReadReceiptByIdRepsonse {
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
        memo: string;
    };
}
