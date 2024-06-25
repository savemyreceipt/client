import { notificationService } from "@/services/notification/notification.service";

import { NOTIFICATION_QUERY_KEYS } from "./keys";
import { useQuery } from "@tanstack/react-query";

export const useNotifications = () => {
    const query = useQuery({
        queryKey: NOTIFICATION_QUERY_KEYS.READ_NOTIFICATIONS(),
        queryFn: () => notificationService.readNotifications(),
    });

    return { ...query };
};
