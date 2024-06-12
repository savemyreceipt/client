import { Avatar, AvatarFallback, AvatarImage } from "@/components/display/Avatar";
import { GroupCard, GroupCardSkeleton } from "@/components/display/Cards/GroupCard";
import { GroupInfoCard } from "@/components/display/Cards/GroupInfoCard";
import { MemberCard, MemberCardSkeleton } from "@/components/display/Cards/MemberCard";
import { ReceiptCardSkeleton } from "@/components/display/Cards/ReceiptCard";
import { Button } from "@/components/forms/Button";
import { withProtectedRoute } from "@/components/guards/withProtectedRoute";

import { useMyGroups } from "@/hooks/groups/useMyGroups";

import { ChevronRightIcon } from "@/assets/ChevronRightIcon";

import { useProfile } from "@/context/ProfileContext";

export default withProtectedRoute(function ProfilePage() {
    const profile = useProfile();
    const { isPending, data } = useMyGroups();

    return (
        <>
            <div className="flex flex-col items-center gap-6 p-6 sm:p-10">
                <Avatar className="h-24 w-24">
                    <AvatarImage alt="@shadcn" src={profile.profileUri} />
                    <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 text-center">
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{profile.email}</p>
                </div>

                <div className="flex flex-col gap-2 w-50">
                    <Button className="w-full max-w-[250px]" variant="white">
                        프로필 수정하기
                    </Button>

                    <Button className="w-full max-w-[200px]" variant="destructive">
                        회원 탈퇴하기
                    </Button>
                </div>
            </div>

            <div className="flex flex-col w-full min-h-screen">
                <div className="container flex-1 py-8 mx-auto">
                    <div className="grid gap-8">
                        <div className="grid gap-4">
                            <h2 className="text-2xl font-bold text-gray-900 flex justify-between items-center hover:cursor-pointer">
                                내가 가입한 그룹
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {isPending
                                    ? Array.from({ length: 12 }).map((_, index) => {
                                          return <GroupCardSkeleton key={index} />;
                                      })
                                    : data?.content.map((group) => {
                                          return (
                                              <GroupCard
                                                  key={group.id}
                                                  id={0}
                                                  name={group.name}
                                                  city={group.city}
                                                  organization={group.organization}
                                                  description={group.description}
                                                  memberCount={group.memberCount}
                                                  receiptCount={group.receiptCount}
                                                  accountantName={group.accountantName}
                                                  accountant={group.accountant}
                                              />
                                          );
                                      })}
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <h2 className="text-2xl font-bold text-gray-900">멤버</h2>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {Array.from({ length: 12 }).map((_, index) => {
                                    return <MemberCardSkeleton key={index} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
