import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { OK } from "@/utils/responseStatus";

import { ExceptionHandler } from "../__common__/exceptions";
import { IJoinGroupResponse } from "../receipt/receipt.types";
import {
    ICreateGroupRequest,
    IReadGroupByGroupId,
    IReadGroupMembersResponse,
    IReadReceiptByGroupIdResponse,
    ISearchGroupsResponse,
} from "./groups.types";

export enum ROLE {
    ACCOUNTANT = "ACCOUNTANT",
    MEMBER = "MEMBER",
}

export const groupsService = {
    searchGroups: async (keyword: string, page: number = 1) => {
        const response = await api.get<ISearchGroupsResponse>(`/groups/search?keyword=${keyword}&page=${page - 1}`);
        return response.data.data.groupList;
    },

    readGroupByGroupId: async (groupId: number) => {
        const response = await api.get<IReadGroupByGroupId>(`/groups/${groupId}`);
        return response.data.data;
    },

    createGroup: async ({ name, city, organization, description }: ICreateGroupRequest) => {
        const response = api.post(`/groups`, { name, city, organization, description });

        return toast.promise(response, {
            pending: "그룹을 생성하고 있습니다",
            success: "그룹 생성 완료!",
            error: "그룹 생성 실패!",
        });
    },

    readGroupMembers: async (groupId: number, page: number = 0) => {
        const response = await api.get<IReadGroupMembersResponse>(`/groups/${groupId}/members?page=${page}`);
        return response.data.data.memberList;
    },

    readReceiptsByGroupId: async (groupId: number, page: number = 0) => {
        const response = await api.get<IReadReceiptByGroupIdResponse>(`/groups/${groupId}/receipts?page=${page}`);
        return response.data.data.receiptList.content;
    },

    joinGroup: async (groupId: number, role: ROLE = ROLE.MEMBER) => {
        const response = await api.post<IJoinGroupResponse>(`/groups/${groupId}/members?role=${role}`);
        ExceptionHandler(response.status);
        return response.data;
    },

    leaveGroup: async (groupId: number) => {
        const response = await api.delete(`/groups/${groupId}/members`);
        return response.data;
    },
};
