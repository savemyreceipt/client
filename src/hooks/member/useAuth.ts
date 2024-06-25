import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { getToken, removeToken, setToken } from "@/utils/token";

export const OAUTH_REDIRECT_URL = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL as string;

export const useAuth = () => {
    const router = useRouter();

    const token = getToken();

    const isAuthenticated = useMemo(() => {
        return token !== null;
    }, [token]);

    const signIn = useCallback(() => {
        router.push("/groups");
    }, [router]);

    const signOut = useCallback(() => {
        removeToken();
        router.replace("/");
        toast.success("로그아웃 완료!");
    }, [router]);

    useEffect(() => {
        if (router.pathname === "/login") {
            const token = router.query.accessToken as string;
            setToken(token);
        }
    }, [router]);

    return { isAuthenticated, signIn, signOut, token };
};
