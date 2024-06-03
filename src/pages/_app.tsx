import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "@/components/feedback/Toast/Toast";
import { NavBar } from "@/components/navigation/NavBar";
import { ProfileContextProvider } from "@/context/ProfileContext";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ProfileContextProvider>
                <Toast />
                <NavBar />
                <Component {...pageProps} />
            </ProfileContextProvider>
        </QueryClientProvider>
    );
}
