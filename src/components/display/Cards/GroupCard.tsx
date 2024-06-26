import { ISearchGroup } from "@/services/groups/groups.types";

import { Avatar, AvatarImage } from "../Avatar/Avatar";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { faReceipt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IGroupCard extends ISearchGroup, Omit<React.ComponentProps<"div">, "id"> {
    button: React.ReactNode;
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
    button,
    ...rest
}) => {
    return (
        <Card {...rest}>
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-gray-500 overflow-hidden text-ellipsis">
                        {city}/{organization}
                    </div>
                    <div className="text-xs text-gray-500 flex-shrink-0 flex">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faUsers} className="mx-1 flex-shrink-0 h-[13px]" />
                            <span className="flex-shrink-0">{memberCount} 명</span>
                        </span>
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faReceipt} className="mx-1 flex-shrink-0 h-[13px]" />
                            <span className="flex-shrink-0">{receiptCount || "0"} 개</span>
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
                {button}
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
