import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "@/components/feedback/Toast/Toast";
import { NavBar } from "@/components/navigation/NavBar";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if (router.pathname === "/" || router.pathname === "/login") {
        return <Component {...pageProps} />;
    }

    return (
        <AnimatePresence mode="wait">
            <QueryClientProvider client={queryClient}>
                <ProfileContextProvider>
                    <Toast />
                    <NavBar />
                    <motion.main key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                        <Component {...pageProps} />
                    </motion.main>
                </ProfileContextProvider>
            </QueryClientProvider>
        </AnimatePresence>
    );
}
