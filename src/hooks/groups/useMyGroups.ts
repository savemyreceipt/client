import { IReadMyGroups } from "@/services/member/member.types";
import { memberService } from "@/services/member/memeber.service";

import { GROUP_QUERY_KEYS } from "./keys";
import { useQuery } from "@tanstack/react-query";

export const useMyGroups = () => {
    const query = useQuery({
        queryKey: GROUP_QUERY_KEYS.READ_MY_GROUP_INFO(),
        queryFn: () => memberService.readMyGroups(),
    });
    return { ...query };
};
