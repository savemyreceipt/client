import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/forms/Button";

import { groupsService } from "@/services/groups/groups.service";

import { GroupCard, IGroupCard } from "./GroupCard";

export interface IGroupSearchCard extends Omit<IGroupCard, "button"> {}

export const GroupSearchCard: React.FC<IGroupSearchCard> = ({ ...props }) => {
    const router = useRouter();

    const handleClick = useCallback(async () => {
        const request = groupsService.joinGroup(props.id);
        toast
            .promise(request, {
                pending: "그룹 가입중입니다",
                success: "그룹 가입 성공!",
                error: "그룹은 최대 10개까지 가입 가능합니다",
            })
            .then(() => {
                router.push(`/groups/${props.id}`);
                queryClient.invalidateQueries({ queryKey: [`/groups`, `/my/groups`] });
            })
            .catch((e) => {
                console.error(e);
            });
    }, [props.id, router]);

    return (
        <GroupCard
            {...props}
            button={
                <Button size="sm" variant="default" onClick={handleClick}>
                    가입하기
                </Button>
            }
        />
    );
};
