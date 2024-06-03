export interface ISearchGroupsResponse {
    code: number;
    message: string;
    data: [
        {
            id: number;
            name: string;
            city: string;
            organization: string;
            description: string;
            memberCount: number;
            receiptCount: number;
            accountant: boolean;
        }
    ];
}

export interface ICreateGroupRequest {
    name: string;
    city: string;
    organization: string;
    description: string;
}
