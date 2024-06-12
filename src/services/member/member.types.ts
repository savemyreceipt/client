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

export type IReadMyGroups = BaseResponse<{
    groupList: {
        totalPages: 0;
        totalElements: 0;
        pageable: {
            paged: true;
            pageNumber: 0;
            pageSize: 0;
            offset: 0;
            sort: {
                sorted: true;
                empty: true;
                unsorted: true;
            };
            unpaged: true;
        };
        size: 0;
        content: [
            {
                id: 0;
                name: "string";
                city: "string";
                organization: "string";
                description: "string";
                memberCount: 0;
                receiptCount: 0;
                accountantName: "string";
                accountant: true;
            },
        ];
        number: 0;
        sort: {
            sorted: true;
            empty: true;
            unsorted: true;
        };
        numberOfElements: 0;
        first: true;
        last: true;
        empty: true;
    };
}>;

export interface IReadMyGroup {
    code: number;
    message: "string";
    data: {};
}
