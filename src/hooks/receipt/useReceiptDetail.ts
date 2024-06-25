import { receiptService } from "@/services/receipt/receipt.service";

import { RECEIPT_QUERY_KEYS } from "./keys";
import { useDetailModal } from "@/context/DetailModalContext";
import { useQuery } from "@tanstack/react-query";

export const useReceiptDetail = () => {
    const { receiptId } = useDetailModal();

    const query = useQuery({
        queryKey: RECEIPT_QUERY_KEYS.READ_RECEIPTS_BY_RECEIPT_ID(receiptId),
        queryFn: () => receiptService.readReceiptById(receiptId),
    });

    return { ...query };
};
