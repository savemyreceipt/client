import { api } from "@/config/axios";
import { IReadProfileResponse } from "./member.types";

export const memberService = {
    readProfile: async () => {
        const response = await api.get<IReadProfileResponse>(`/members`);
        return response.data;
    },
};
