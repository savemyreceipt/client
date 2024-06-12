import { api } from "@/config/axios";

import { IReadMyGroups, IReadProfileResponse } from "./member.types";

export const memberService = {
    readProfile: async () => {
        const response = await api.get<IReadProfileResponse>(`/members`);
        return response.data;
    },

    readMyGroups: async (page: number = 0) => {
        const response = await api.get<IReadMyGroups>(`/groups?page=${page}`);
        return response.data.data.groupList;
    },
};
