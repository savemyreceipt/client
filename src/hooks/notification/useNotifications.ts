import { notificationService } from "@/services/notification/notification.service";

import { useQuery } from "@tanstack/react-query";

export const useNotifications = () => {
    const query = useQuery({
        queryKey: [`/noti`],
        queryFn: () => notificationService.readNotifications(),
    });

    return { ...query };
};
