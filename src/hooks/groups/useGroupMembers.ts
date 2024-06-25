import { useRouter } from "next/router";

import { groupsService } from "@/services/groups/groups.service";

import { GROUP_QUERY_KEYS } from "./keys";
import { useQuery } from "@tanstack/react-query";

export const useGroupMembers = (page: number = 0) => {
    const router = useRouter();
    const query = useQuery({
        queryKey: GROUP_QUERY_KEYS.READ_GROUP_MEMBERS_BY_GROUP_ID(Number(router.query.id)),
        queryFn: () => groupsService.readGroupMembers(Number(router.query.id), page),
    });
    return { ...query };
};
