import { getToken, removeToken, setToken } from "@/utils/token";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const OAUTH_REDIRECT_URL = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL as string;

export const useAuth = () => {
    const router = useRouter();

    const token = getToken();
    const isAuthenticated = token !== null;

    const signIn = useCallback(() => {
        router.push("/groups");
    }, [router]);

    const signOut = useCallback(() => {
        removeToken();
        toast.success("로그아웃 완료!");
    }, []);

    useEffect(() => {
        if (router.pathname === "/login") {
            const token = router.query.accessToken as string;
            setToken(token);
        }
    }, [router]);

    return { isAuthenticated, signIn, signOut, token };
};