import { memberService } from "@/services/member/memeber.service";

import { useQuery } from "@tanstack/react-query";

export const useMyGroups = () => {
    const query = useQuery({
        queryKey: [`/groups`, `/my/groups`],
        queryFn: () => memberService.readMyGroups(),
    });
    return { ...query };
};
