import { api } from "@/config/axios";

import { IReadNotifications } from "./notification.types";

export const notificationService = {
    readNotifications: async (page: number = 0) => {
        const response = await api.get<IReadNotifications>(`/noti?page=${page}`);
        return response.data.data.notificationList.content;
    },
};
