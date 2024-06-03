import { queryClient } from "@/pages/_app";
import { groupsService } from "@/services/groups/groups.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useCallback, useRef } from "react";
import { toast } from "react-toastify";

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
            queryClient.invalidateQueries({ queryKey: [`/groups`] });
            router.replace("/groups");
        },
    });

    const handleSubmit = useCallback(() => {
        mutate();
    }, [mutate]);

    return { nameRef, cityRef, organizationRef, descriptionRef, handleSubmit };
};
