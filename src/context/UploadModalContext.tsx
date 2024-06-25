import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export const UploadModalContext = createContext<{
    isModalOpened: boolean;
    setIsModalOpened: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const UploadModalContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    return (
        <UploadModalContext.Provider value={{ isModalOpened, setIsModalOpened }}>
            {children}
        </UploadModalContext.Provider>
    );
};

export const useUploadModal = () => {
    const context = useContext(UploadModalContext);
    if (!context) throw new Error("useModal 은 UploadModalContext 내부에서 사용되어야 합니다");
    return context;
};
