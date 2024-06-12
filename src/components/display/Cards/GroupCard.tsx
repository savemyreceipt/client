import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/forms/Button";

import { queryClient } from "@/pages/_app";

import { groupsService } from "@/services/groups/groups.service";
import { ISearchGroup } from "@/services/groups/groups.types";

import { Avatar, AvatarImage } from "../Avatar";
import { Card, CardHeader, CardContent, CardFooter } from "./style";
import { faReceipt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IGroupCard extends ISearchGroup {
    variants: "SEARCH" | "JOINED";
}

export const GroupCard: React.FC<IGroupCard> = ({
    id,
    name,
    city,
    organization,
    description,
    memberCount,
    receiptCount,
    accountantName,
    variants,
}) => {
    const router = useRouter();

    const handleJoinBtnClick = useCallback(async () => {
        const request = groupsService.joinGroup(id);
        toast
            .promise(request, {
                pending: "그룹 가입중입니다",
                success: "그룹 가입 성공!",
                error: "이미 가입된 그룹입니다",
            })
            .then(() => {
                router.push({ pathname: `/groups/${id}` });
            });
    }, [id, router]);

    const handleLeaveBtnClick = useCallback(async () => {
        const request = groupsService.leaveGroup(id);
        toast
            .promise(request, {
                success: "그룹 탈퇴 완료!",
                pending: "잠시만 기다려주세요..",
                error: "그룹 탈퇴 실패! 관리자에게 문의해주세요",
            })
            .then(() => {
                queryClient.invalidateQueries({ queryKey: [`/groups`] });
            });
    }, [id]);

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-gray-500 overflow-hidden text-ellipsis">
                        {city}/{organization}
                    </div>
                    <div className="text-xs text-gray-500 flex-shrink-0">
                        <span>
                            <FontAwesomeIcon icon={faUsers} className="mx-1" />
                            {memberCount} 명
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faReceipt} className="mx-1" />
                            {receiptCount || "0"} 개
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl p-0 font-semibold overflow-hidden text-ellipsis">{name}</div>
                </div>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border">
                        <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                    </Avatar>
                    <div className="text-xs text-gray-500">{accountantName}</div>
                </div>
                <Button
                    size="sm"
                    variant={variants === "SEARCH" ? "default" : "destructive"}
                    onClick={variants === "SEARCH" ? handleJoinBtnClick : handleLeaveBtnClick}
                >
                    {variants === "SEARCH" ? "가입하기" : "탈퇴하기"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export const GroupCardSkeleton = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <div className="text-xs bg-gray-200 h-4 w-24 animate-pulse" />
                    <div className="text-xs bg-gray-200 h-4 w-12 animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl bg-gray-200 h-6 w-36 animate-pulse" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="bg-gray-200 h-4 w-full animate-pulse mb-2" />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
                    <div className="text-xs bg-gray-200 h-4 w-24 animate-pulse" />
                </div>
                <div className="bg-gray-200 h-8 w-16 animate-pulse" />
            </CardFooter>
        </Card>
    );
};
