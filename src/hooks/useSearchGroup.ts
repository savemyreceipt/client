import { groupsService } from "@/services/groups/groups.service";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";
import { usePage } from "./usePage";

export const useSearchGroup = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>("");

    const debouncedKeyword = useDebounce(keyword, 1000);
    const { page } = usePage();

    const { isPending, data } = useQuery({
        queryKey: [`/groups`, `/groups/search?keyword=${debouncedKeyword}&page=${page}`],
        queryFn: () => groupsService.searchGroups(debouncedKeyword, page === 0 ? 1 : page),
        staleTime: 0,
    });

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }, []);

    return { inputRef, isPending, data, handleChange };
};
