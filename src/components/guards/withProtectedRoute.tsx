import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "@/hooks/member/useAuth";

export const withProtectedRoute = <Props extends object>(PageComponent: NextPage) => {
    const ProtectedPage = (props: Props) => {
        const router = useRouter();
        const { token } = useAuth();

        useEffect(() => {
            if (!token) router.replace("/");
        }, [router, token]);

        return <PageComponent {...props} />;
    };

    return ProtectedPage;
};
