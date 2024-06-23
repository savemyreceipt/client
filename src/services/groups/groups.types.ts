export interface ISearchGroup {
    id: number;
    name: string;
    city: string;
    organization: string;
    description: string;
    memberCount: number;
    receiptCount: number;
    accountantName: string;
    accountant: boolean;
}

export interface ISearchGroupsResponse {
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
            content: ISearchGroup[];
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

export interface IReadGroupByGroupId {
    code: number;
    message: string;
    data: {
        id: number;
        name: string;
        city: string;
        organization: string;
        description: string;
        memberCount: number;
        receiptCount: number;
        accountantName: string;
        accountant: boolean;
        totalExpenditure: number;
    };
}

export interface ICreateGroupRequest {
    name: string;
    city: string;
    organization: string;
    description: string;
}

export interface IReadGroupMembersResponse {
    code: number;
    message: string;
    data: {
        memberList: {
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
                    email: string;
                    name: string;
                    profileUri: string;
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

export interface IReadReceiptByGroupIdResponse {
    code: number;
    message: string;
    data: {
        receiptList: {
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
                    imageUri: string;
                    category: string;
                    description: string;
                    purchaseDate: string;
                    price: number;
                    checked: boolean;
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
