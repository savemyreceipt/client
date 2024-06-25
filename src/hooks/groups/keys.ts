export const GROUP_QUERY_KEYS = {
    ALL: () => {
        return [`/groups`];
    },
    READ_GROUP_INFO_BY_GROUP_ID: (groupId: number) => {
        return [`/groups`, `/groups/:groupId`, `/groups/${Number(groupId)}`];
    },
    READ_GROUP_MEMBERS_BY_GROUP_ID: (groupId: number) => {
        return [`/groups`, `/groups/:groupId`, `/groups/${Number(groupId)}`];
    },
    READ_MY_GROUP_INFO: () => {
        return [`/groups`, `/my/groups`];
    },
    READ_GROUP_BY_KEYWORD: (keyword: string, page: number) => {
        return [`/groups`, `/groups/search?keyword=${keyword}&page=${page}`];
    },
};
