import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import { RootModal } from "@/components/feedback/Modal/RootModal";
import { Toast } from "@/components/feedback/Toast/Toast";
import { NavBar } from "@/components/navigation/NavBar";

import "@/styles/globals.css";

import { RootContextProvider } from "@/context/RootContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
                <RootContextProvider>
                    <RootModal />
                    <Toast />

                    <NavBar />
                    <motion.main
                        key={router.route}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Head>
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Component {...pageProps} />
                    </motion.main>
                </RootContextProvider>
            </QueryClientProvider>
        </AnimatePresence>
    );
}
