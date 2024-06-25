import { useRouter } from "next/router";
import { useCallback, useRef } from "react";

import { groupsService } from "@/services/groups/groups.service";

import { queryClient } from "@/config/query";

import { GROUP_QUERY_KEYS } from "./keys";
import { useMutation } from "@tanstack/react-query";

export const useNewGroup = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const organizationRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const router = useRouter();

    const { mutate } = useMutation({
        mutationFn: () =>
            groupsService.createGroup({
                name: nameRef.current?.value as string,
                city: cityRef.current?.value as string,
                organization: organizationRef.current?.value as string,
                description: descriptionRef.current?.value as string,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: GROUP_QUERY_KEYS.ALL() });
            router.replace("/groups");
        },
    });

    const handleSubmit = useCallback(() => {
        mutate();
    }, [mutate]);

    return { nameRef, cityRef, organizationRef, descriptionRef, handleSubmit };
};
