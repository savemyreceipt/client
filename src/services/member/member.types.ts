import { BaseResponse } from "../__common__/types";

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

export interface IReadMyGroups {
    code: number;
    message: string;
    data: {
        groupList: {
            totalPages: number;
            totalElements: number;
            pageable: {
                paged: boolean;
                pageNumber: number;
                pageSize: number;
                offset: number;
                sort: {
                    sorted: boolean;
                    empty: boolean;
                    unsorted: boolean;
                };
                unpaged: boolean;
            };
            size: number;
            content: [
                {
                    id: number;
                    name: string;
                    city: string;
                    organization: string;
                    description: string;
                    memberCount: number;
                    receiptCount: number;
                    accountantName: string;
                    accountant: boolean;
                },
            ];
            number: number;
            sort: {
                sorted: boolean;
                empty: boolean;
                unsorted: boolean;
            };
            first: boolean;
            last: boolean;
            numberOfElements: number;
            empty: boolean;
        };
    };
}

export interface IReadMyGroup {
    code: number;
    message: string;
    data: {};
}
