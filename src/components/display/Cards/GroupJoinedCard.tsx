import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/forms/Button";

import { groupsService } from "@/services/groups/groups.service";

import { queryClient } from "@/config/query";

import { GroupCard, IGroupCard } from "./GroupCard";

export interface IGroupJoinedCard extends Omit<IGroupCard, "button"> {}

export const GroupJoinedCard: React.FC<IGroupJoinedCard> = ({ ...props }) => {
    const router = useRouter();

    const handleLeaveBtnClick = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();

            const request = groupsService.leaveGroup(props.id);
            toast
                .promise(request, {
                    success: "그룹 탈퇴 완료!",
                    pending: "잠시만 기다려주세요..",
                    error: "회계담당자는 그룹을 탈퇴할 수 없습니다",
                })
                .then(() => {
                    queryClient.invalidateQueries({ queryKey: [`/groups`] });
                    router.push(`/groups`);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        [props.id, router],
    );

    const handleCardClick = useCallback(() => {
        router.push(`/groups/${props.id}`);
    }, [props.id, router]);

    return (
        <GroupCard
            {...props}
            className="hover:cursor-pointer"
            button={
                <Button size="sm" variant="destructive" onClick={handleLeaveBtnClick}>
                    탈퇴하기
                </Button>
            }
            onClick={handleCardClick}
        />
    );
};
