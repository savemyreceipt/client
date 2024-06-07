import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const usePage = () => {
    const searchParam = useSearchParams();
    const router = useRouter();

    const setPage = useCallback(
        (page: number) => {
            router.push(`?page=${page}`);
        },
        [router]
    );

    return { page: Number(searchParam.get("page")), setPage };
};
