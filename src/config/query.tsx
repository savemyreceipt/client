import { QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
        },
    },
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider client={queryClient}>{children}</Provider>;
};
