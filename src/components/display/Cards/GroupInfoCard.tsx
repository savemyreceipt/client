import { Card, CardContent } from "./style";

export interface IGroupInfoCard {
    region: string;
    totalReceipts: number;
    totalMembers: number;
    createdAt: string;
}

export const GroupInfoCard: React.FC<IGroupInfoCard> = ({ region, totalReceipts, totalMembers, createdAt }) => {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500 ">지역</div>
                        <div className="text-sm font-medium text-gray-900 ">{region}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500 ">조직</div>
                        <div className="text-sm font-medium text-gray-900 ">{region}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500 ">총 영수증</div>
                        <div className="text-sm font-medium text-gray-900 ">{totalReceipts ?? "0"} 개</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500 ">총 멤버수</div>
                        <div className="text-sm font-medium text-gray-900 ">{totalMembers} 명</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500 ">그룹 생성날짜</div>
                        <div className="text-sm font-medium text-gray-900 ">{createdAt}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
