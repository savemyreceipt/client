import { ChevronRightIcon } from "@/assets/ChevronRightIcon";
import { TrashIcon } from "@/assets/TrashIcon";
import { Avatar, AvatarImage } from "@/components/display/Avatar";
import { Card, CardContent } from "@/components/display/Cards/style";
import { GroupInfoCard } from "@/components/display/Cards/GroupInfoCard";
import { Button } from "@/components/forms/Button";
import { useRouter } from "next/router";
import { ISearchGroup } from "@/services/groups/groups.types";
import { Title } from "@/components/typography/Title";
import { useGroupMembers } from "@/hooks/useGroupMembers";
import { MemberCard, MemberCardSkeleton } from "@/components/display/Cards/MemberCard";
import { ReceiptCard, ReceiptCardSkeleton } from "@/components/display/Cards/ReceiptCard";
import Link from "next/link";

export default function GroupDetailPage() {
    const router = useRouter();

    const { id, name, city, organization, description, memberCount, receiptCount, accountant, accountantName }: ISearchGroup = router.query;

    const { isPending, data: members } = useGroupMembers(id, 0);

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="container flex-1 py-8 mx-auto">
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <Title title={name} subtitle={description} />
                        <GroupInfoCard region={city} totalReceipts={receiptCount} totalMembers={memberCount} createdAt="" />
                    </div>

                    <nav className="ml-auto">
                        <Button className="mx-1" size="sm">
                            영수증 업로드
                        </Button>
                        <Button className="mx-1" size="sm">
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
                            <ReceiptCard />
                            <ReceiptCardSkeleton />
                            <ReceiptCardSkeleton />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">멤버</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {isPending
                                ? Array.from({ length: 12 }).map((_, index) => {
                                      return <MemberCardSkeleton key={index} />;
                                  })
                                : members?.content.slice(0, 12).map((member) => {
                                      return <MemberCard key={member.id} name={member.name} email={member.email} profileImg={member.profileUri} />;
                                  })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
