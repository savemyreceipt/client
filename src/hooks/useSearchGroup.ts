import { groupsService } from "@/services/groups/groups.service";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearchGroup = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>(" ");

    const debouncedKeyword = useDebounce(keyword, 1000);

    const { isPending, data } = useQuery({
        queryKey: [`/groups`, `/groups/search?keyword=${debouncedKeyword}`],
        queryFn: () => groupsService.searchGroups(debouncedKeyword),
        enabled: Boolean(debouncedKeyword),
        staleTime: 0,
    });

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }, []);

    return { inputRef, isPending, data, handleChange };
};
