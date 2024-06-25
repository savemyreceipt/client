import { ChangeEvent, useCallback, useRef, useState } from "react";

import { groupsService } from "@/services/groups/groups.service";

import { useDebounce } from "../useDebounce";
import { usePage } from "../usePage";
import { GROUP_QUERY_KEYS } from "./keys";
import { useQuery } from "@tanstack/react-query";

export const useSearchGroup = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>("");

    const { page } = usePage();
    const debouncedKeyword = useDebounce(keyword, 1000);

    const { isPending, data } = useQuery({
        queryKey: GROUP_QUERY_KEYS.READ_GROUP_BY_KEYWORD(keyword, page),
        queryFn: () => groupsService.searchGroups(debouncedKeyword, page === 0 ? 1 : page),
        staleTime: 0,
    });

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }, []);

    return { inputRef, isPending, data, handleChange };
};
