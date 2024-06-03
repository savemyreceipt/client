import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "@/components/feedback/Toast/Toast";

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Toast />
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
