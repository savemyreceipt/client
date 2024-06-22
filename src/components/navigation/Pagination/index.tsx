import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { usePage } from "@/hooks/usePage";

import {
    Pagination as PaginationWrapper,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationLink,
    PaginationNext,
} from "./style";

export interface IPagination {
    totalPages: number;
}

export const Pagination: React.FC<IPagination> = ({ totalPages }) => {
    const searchParam = useSearchParams();

    const { page: currentPage } = usePage();

    return (
        <PaginationWrapper className="my-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={currentPage !== 1 ? `?page=${currentPage - 1}` : "?page=1"} />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, key) => key + 1).map((page) => {
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                href={`?page=${page}`}
                                isActive={currentPage === page || (!currentPage && page === 1)}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationItem>
                    <PaginationNext
                        href={currentPage !== totalPages ? `?page=${currentPage + 1}` : `?page=${totalPages}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </PaginationWrapper>
    );
};
