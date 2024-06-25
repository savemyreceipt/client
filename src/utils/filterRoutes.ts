import { NextRouter } from "next/router";

export const filterRoutes = (router: NextRouter, pathnames: string[]) => {
    for (const pathname of pathnames) {
        if (pathname === router.pathname) return true;
    }
    return false;
};
