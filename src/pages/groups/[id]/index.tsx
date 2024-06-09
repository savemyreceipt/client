import { useCallback } from "react";

import { GroupInfoCard, GroupInfoCardSkeleton } from "@/components/display/Cards/GroupInfoCard";
import { MemberCard, MemberCardSkeleton } from "@/components/display/Cards/MemberCard";
import { ReceiptCard, ReceiptCardSkeleton } from "@/components/display/Cards/ReceiptCard";
import { Button } from "@/components/forms/Button";

import { useGroupMembers } from "@/hooks/groups/useGroupMembers";
import { useReceipt } from "@/hooks/receipt/useReceipt";

import { ChevronRightIcon } from "@/assets/ChevronRightIcon";

import { useUploadModal } from "@/context/UploadModalContext";

export default function GroupDetailPage() {
    const { isPending: isGroupInfoPending, data: members } = useGroupMembers();
    const { setIsModalOpened } = useUploadModal();

    const { isPending: isReceiptPending, data: receipts } = useReceipt();

    const handleUploadBtnClick = useCallback(() => {
        setIsModalOpened(true);
    }, [setIsModalOpened]);

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="container flex-1 py-8 mx-auto">
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <GroupInfoCard />
                    </div>

                    <nav className="ml-auto">
                        <Button className="mx-1" size="sm" variant="destructive">
                            그룹 탈퇴하기
                        </Button>
                        <Button className="mx-1" size="sm" onClick={handleUploadBtnClick}>
                            영수증 업로드
                        </Button>
                    </nav>

                    <div className="grid gap-4">
                        <h2 className="text-2xl font-bold text-gray-900 flex justify-between items-center hover:cursor-pointer">
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
}
