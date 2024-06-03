export interface IReadProfileResponse {
    code: number;
    message: string;
    data: {
        id: number;
        email: string;
        name: string;
        profileUri: string;
    };
}
