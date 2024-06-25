import { Title, TitleSkeleton } from "@/components/typography/Title";

import { useGroupInfo } from "@/hooks/groups/useGroupInfo";

import { Card, CardContent } from "./Card";

export const GroupInfoCard = () => {
    const { isPending, data } = useGroupInfo();

    if (isPending) {
        return (
            <>
                <TitleSkeleton />
                <GroupInfoCardSkeleton />
            </>
        );
    }

    return (
        <>
            <Title title={data?.name as string} subtitle={data?.description as string} />
            <Card>
                <CardContent className="pt-6">
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500 ">지역</div>
                            <div className="text-sm font-medium text-gray-900 ">{data?.city}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500 ">조직</div>
                            <div className="text-sm font-medium text-gray-900 ">{data?.organization}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500 ">총 멤버수</div>
                            <div className="text-sm font-medium text-gray-900 ">{data?.memberCount} 명</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500 ">총 영수증</div>
                            <div className="text-sm font-medium text-gray-900 ">{data?.receiptCount ?? "0"} 개</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500 ">총 지출</div>
                            <div className="text-sm font-medium text-gray-900 ">{data?.totalExpenditure ?? "0"} 원</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-500 ">회계 담당자</div>
                            <div className="text-sm font-medium text-gray-900 ">{data?.accountantName}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export const GroupInfoCardSkeleton = () => {
    return (
        <div className="bg-white shadow rounded-lg">
            <div className="p-6">
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">지역</div>
                        <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">조직</div>
                        <div className="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">총 멤버수</div>
                        <div className="w-12 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">총 영수증</div>
                        <div className="w-12 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">회계 담당자</div>
                        <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">회계 담당자</div>
                        <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
