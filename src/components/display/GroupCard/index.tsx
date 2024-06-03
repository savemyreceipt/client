import { Button } from "@/components/forms/Button";
import { Avatar, AvatarImage } from "../Avatar";
import { Card, CardHeader, CardContent, CardFooter } from "./style";

export const GroupCard = () => {
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
                    Join
                </Button>
            </CardFooter>
        </Card>
    );
};
