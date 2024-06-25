import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

import { IReadReceiptByIdRepsonse } from "@/services/receipt/receipt.types";

export const DetailModalContext = createContext<{
    isModalOpened: boolean;
    setIsModalOpened: Dispatch<SetStateAction<boolean>>;

    receiptId: number;
    setReceiptId: Dispatch<SetStateAction<number>>;
} | null>(null);

export const DetailModalContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [receiptId, setReceiptId] = useState<number>(NaN);

    return (
        <DetailModalContext.Provider value={{ isModalOpened, setIsModalOpened, receiptId, setReceiptId }}>
            {children}
        </DetailModalContext.Provider>
    );
};

export const useDetailModal = () => {
    const context = useContext(DetailModalContext);
    if (!context) throw new Error("useDetailModal 은 DetailModalContext 내부에서 사용되어야 합니다");
    return context;
};
