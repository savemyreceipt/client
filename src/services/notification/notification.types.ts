export interface IReadNotifications {
    code: number;
    message: string;
    data: {
        notificationList: {
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
                    title: string;
                    message: string;
                    createdAt: string;
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
