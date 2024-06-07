import { Avatar, AvatarImage } from "../Avatar";
import { Card, CardContent } from "./style";

export interface IMemberCard {
    email: string;
    name: string;
    profileImg: string;
}

export const MemberCard: React.FC<IMemberCard> = ({ email, name, profileImg }) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-4 pt-6">
                <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="user-profile-img" src={profileImg} />
                </Avatar>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export const MemberCardSkeleton = () => {
    return (
        <Card>
            <CardContent className="flex items-center gap-4 pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="flex flex-col gap-2">
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-40 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </CardContent>
        </Card>
    );
};
