import { useRouter } from "next/router";

import { groupsService } from "@/services/groups/groups.service";
import { receiptService } from "@/services/receipt/receipt.service";

import { useDetailModal } from "@/context/DetailModalContext";
import { useQuery } from "@tanstack/react-query";

export const useReceipt = (page: number = 0) => {
    const router = useRouter();
    const query = useQuery({
        queryKey: [`/groups/:groupId/receipts`, `/groups/${Number(router.query.id)}`],
        queryFn: () => groupsService.readReceiptsByGroupId(Number(router.query.id), page),
    });

    return { ...query };
};

export const useReceiptDetail = () => {
    const { receiptId } = useDetailModal();

    const query = useQuery({
        queryKey: [`/receipts/${receiptId}`, `/receipts`],
        queryFn: () => receiptService.readReceiptById(receiptId),
    });

    return { ...query };
};
