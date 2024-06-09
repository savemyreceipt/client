import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from ".";

export const NotificationDropDown = () => {
    return (
        <DropdownMenuContent align="end" className="w-[320px] h-[400px] overflow-y-scroll">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-900 ">New receipt added</p>
                        <p className="text-sm text-gray-500 ">John Doe added a new receipt</p>
                    </div>
                </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
    );
};
