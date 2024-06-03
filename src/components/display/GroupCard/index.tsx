import { Button } from "@/components/forms/Button";
import { Avatar, AvatarImage } from "../Avatar";
import { Card, CardHeader, CardContent, CardFooter } from "./style";

export interface IGroupCard {
    createdAt: string;
    members: number;
}

export const GroupCard: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-gray-500">2024 년 6월 3일</div>
                    <div className="text-xs text-gray-500">123 members</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl p-0 font-semibold">Group 1</div>
                </div>
            </CardHeader>
            <CardContent>This is a description of Group 1.This is a description of Group 1.</CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border">
                        <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                    </Avatar>
                    <div className="text-xs text-gray-500">Managed by John Doe</div>
                </div>
                <Button size="sm" variant="default">
                    가입하기
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
