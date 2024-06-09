import { useRouter } from "next/router";

import { groupsService } from "@/services/groups/groups.service";

import { useQuery } from "@tanstack/react-query";

export const useGroupInfo = () => {
    const router = useRouter();
    const query = useQuery({
        queryKey: [`/groups/:groupId`, `/groups/${Number(router.query.id)}`],
        queryFn: () => groupsService.readGroupByGroupId(Number(router.query.id)),
    });
    return { ...query };
};
