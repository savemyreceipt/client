import { groupsService } from "@/services/groups/groups.service";
import { useQuery } from "@tanstack/react-query";

export const useGroupMembers = (groupId: number, page: number = 0) => {
    const query = useQuery({
        queryKey: [`/group/members`, `/group/${groupId}/members`],
        queryFn: () => groupsService.readGroupMembers(groupId, page),
    });

    return { ...query };
};
