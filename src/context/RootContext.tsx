import { ProfileContextProvider } from "./ProfileContext";
import { UploadModalContextProvider } from "./UploadModalContext";

export const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ProfileContextProvider>
                <UploadModalContextProvider>{children}</UploadModalContextProvider>
            </ProfileContextProvider>
        </>
    );
};
