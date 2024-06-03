import { isServer } from "./isServer";

export const OAUTH_TOKEN_STORAGE_KEY = "auth/token";

export const getToken = () => {
    if (isServer) return null;
    return localStorage.getItem(OAUTH_TOKEN_STORAGE_KEY);
};

export const setToken = (token: string) => {
    if (isServer) return null;
    return localStorage.setItem(OAUTH_TOKEN_STORAGE_KEY, token);
};

export const removeToken = () => {
    if (isServer) return null;
    return localStorage.removeItem(OAUTH_TOKEN_STORAGE_KEY);
};
