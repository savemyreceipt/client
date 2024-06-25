export const RECEIPT_QUERY_KEYS = {
    ALL: () => {
        return [`/receipts`];
    },
    READ_RECEIPTS_BY_GROUP_ID: (groupId: number, page: number) => {
        return [`/receipts`, `/groups/:groupId/receipts`, `/groups/${groupId}/receipts?page=${page}`];
    },
    READ_RECEIPTS_BY_RECEIPT_ID: (receiptId: number) => {
        return [`/receipts`, `/receipts/${receiptId}`];
    },
};
