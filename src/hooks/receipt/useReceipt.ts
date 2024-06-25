import { useRouter } from "next/router";

import { groupsService } from "@/services/groups/groups.service";

import { RECEIPT_QUERY_KEYS } from "./keys";
import { useQuery } from "@tanstack/react-query";

export const useReceipt = (page: number = 0) => {
    const router = useRouter();
    const query = useQuery({
        queryKey: RECEIPT_QUERY_KEYS.READ_RECEIPTS_BY_GROUP_ID(Number(router.query.id), page),
        queryFn: () => groupsService.readReceiptsByGroupId(Number(router.query.id), page),
    });

    return { ...query };
};
