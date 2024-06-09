import { groupsService } from "@/services/groups/groups.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useGroupMembers = (page: number = 0) => {
    const router = useRouter();
    const query = useQuery({
        queryKey: [`/group/members`, `/group/${Number(router.query.id)}/members`],
        queryFn: () => groupsService.readGroupMembers(Number(router.query.id), page),
    });
    return { ...query };
};
