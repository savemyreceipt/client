import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import { PageTransition } from "@/components/animations/PageTransition";
import { RootModal } from "@/components/feedback/Modal/RootModal";
import { Toast } from "@/components/feedback/Toast/Toast";
import { ApplyProviders } from "@/components/helpers/ApplyProviders";
import { NavBar } from "@/components/navigation/NavBar/NavBar";

import { QueryProvider } from "@/config/query";

import { filterRoutes } from "@/utils/filterRoutes";

import "@/styles/globals.css";

import { DetailModalContextProvider } from "@/context/DetailModalContext";
import { ProfileContextProvider } from "@/context/ProfileContext";
import { UploadModalContextProvider } from "@/context/UploadModalContext";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if (filterRoutes(router, ["/", "/login", "/design"])) {
        return <Component {...pageProps} />;
    }

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AnimatePresence mode="wait">
                <QueryProvider>
                    <ApplyProviders
                        providers={[
                            <ProfileContextProvider key={1} />,
                            <UploadModalContextProvider key={2} />,
                            <DetailModalContextProvider key={3} />,
                        ]}
                    >
                        <RootModal />
                        <Toast />
                        <NavBar />
                        <PageTransition key={router.route}>
                            <Component {...pageProps} />
                        </PageTransition>
                    </ApplyProviders>
                </QueryProvider>
            </AnimatePresence>
        </>
    );
}
