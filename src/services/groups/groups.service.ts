import { api } from "@/config/axios";
import { ICreateGroupRequest, ISearchGroupsResponse } from "./groups.types";
import { toast } from "react-toastify";

export const groupsService = {
    searchGroups: async (keyword: string) => {
        const response = await api.get<ISearchGroupsResponse>(`/groups/search?keyword=${keyword}`);
        return response.data;
    },

    createGroup: async ({ name, city, organization, description }: ICreateGroupRequest) => {
        const response = api.post(`/groups`, { name, city, organization, description });

        return toast.promise(response, {
            pending: "그룹을 생성하고 있습니다",
            success: "그룹 생성 완료!",
            error: "그룹 생성 실패!",
        });
    },
};
