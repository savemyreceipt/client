import { useNotifications } from "@/hooks/notification/useNotifications";

import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./DropDown";

export interface INotification {
    title: string;
    message: string;
}

export const NotificationDropDown = () => {
    const { isPending, data } = useNotifications();

    return (
        <DropdownMenuContent align="end" className="w-[320px] h-[400px] overflow-y-scroll">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <div className="flex flex-col items-center justify-between">
                    {!isPending &&
                        data &&
                        data?.map((notification) => {
                            return (
                                <NotificationItem
                                    key={notification.id}
                                    title={notification.title}
                                    message={notification.message}
                                />
                            );
                        })}
                </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
    );
};

export const NotificationItem: React.FC<INotification> = ({ title, message }) => {
    return (
        <div className="block w-full my-1">
            <p className="text-sm font-medium text-gray-900 ">{title}</p>
            <p className="text-sm text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">{message}</p>
        </div>
    );
};
