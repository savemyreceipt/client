import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast } from "react-toastify";

import { GroupInfoCard, GroupInfoCardSkeleton } from "@/components/display/Cards/GroupInfoCard";
import { MemberCard, MemberCardSkeleton } from "@/components/display/Cards/MemberCard";
import { ReceiptCard, ReceiptCardSkeleton } from "@/components/display/Cards/ReceiptCard";
import { Button } from "@/components/forms/Button";
import { withProtectedRoute } from "@/components/guards/withProtectedRoute";

import { queryClient } from "@/pages/_app";

import { useGroupMembers } from "@/hooks/groups/useGroupMembers";
import { useReceipt } from "@/hooks/receipt/useReceipt";

import { groupsService } from "@/services/groups/groups.service";

import { ChevronRightIcon } from "@/assets/ChevronRightIcon";

import { useUploadModal } from "@/context/UploadModalContext";

export default withProtectedRoute(function GroupDetailPage() {
    const router = useRouter();

    const { isPending: isGroupInfoPending, data: members } = useGroupMembers();
    const { setIsModalOpened } = useUploadModal();

    const { isPending: isReceiptPending, data: receipts } = useReceipt();

    const handleUploadBtnClick = useCallback(() => {
        setIsModalOpened(true);
    }, [setIsModalOpened]);

    const handleLeaveGroupBtnClick = useCallback(() => {
        const request = groupsService.leaveGroup(Number(router.query.id));
        toast
            .promise(request, {
                success: "그룹 탈퇴 완료!",
                pending: "잠시만 기다려주세요..",
                error: "회계담당자는 그룹을 탈퇴할 수 없습니다",
            })
            .then(() => {
                queryClient.invalidateQueries({ queryKey: [`/groups`, `/my/groups`] });
                router.push(`/groups`);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [router]);

    const handleNavigateReceiptPage = useCallback(() => {
        router.push(`/groups/${router.query.id}/receipts`);
    }, [router]);

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="container flex-1 py-8 mx-auto">
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <GroupInfoCard />
                    </div>

                    <nav className="ml-auto">
                        <Button className="mx-1" size="sm" variant="destructive" onClick={handleLeaveGroupBtnClick}>
                            그룹 탈퇴하기
                        </Button>
                        <Button className="mx-1" size="sm" onClick={handleUploadBtnClick}>
                            영수증 업로드
                        </Button>
                    </nav>

                    <div className="grid gap-4">
                        <h2
                            className="text-2xl font-bold text-gray-900 flex justify-between items-center hover:cursor-pointer"
                            onClick={handleNavigateReceiptPage}
                        >
                            최근 업로드된 영수증
                            <span className="flex text-sm items-center">
                                더보기
                                <ChevronRightIcon className="ml-1" />
                            </span>
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {isReceiptPending
                                ? Array.from({ length: 12 }).map((_, index) => {
                                      return <ReceiptCardSkeleton key={index} />;
                                  })
                                : receipts?.map((receipt) => {
                                      return (
                                          <ReceiptCard
                                              key={receipt.id}
                                              id={receipt.id}
                                              category={receipt.category}
                                              purchaseDate={receipt.purchaseDate}
                                              price={receipt.price}
                                          />
                                      );
                                  })}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">멤버</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {isGroupInfoPending
                                ? Array.from({ length: 12 }).map((_, index) => {
                                      return <MemberCardSkeleton key={index} />;
                                  })
                                : members?.content.slice(0, 12).map((member) => {
                                      return (
                                          <MemberCard
                                              key={member.id}
                                              name={member.name}
                                              email={member.email}
                                              profileImg={member.profileUri}
                                          />
                                      );
                                  })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
