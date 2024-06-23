import { useCallback } from "react";

import { Button } from "@/components/forms/Button";

import { Card } from "./style";
import { useDetailModal } from "@/context/DetailModalContext";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IReceiptCard {
    id: number;
    category: string;
    purchaseDate: string;
    price: number;
}

export const ReceiptCard: React.FC<IReceiptCard> = ({ id, category, purchaseDate, price }) => {
    const { setIsModalOpened, setReceiptId } = useDetailModal();

    const handleClick = useCallback(() => {
        setReceiptId(id);
        setIsModalOpened(true);
    }, [id, setReceiptId, setIsModalOpened]);

    return (
        <Card className="p-3 flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faReceipt} />
                    <span className="text-sm font-medium">{category || "기타"}</span>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{purchaseDate}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">{price} 원</span>
                <Button size="sm" variant="outline" onClick={handleClick}>
                    상세정보
                </Button>
            </div>
        </Card>
    );
};

export const ReceiptCardSkeleton = () => {
    return (
        <Card className="p-3 flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <span className="w-20 h-4 bg-gray-200 rounded animate-pulse"></span>
                </div>
                <span className="w-24 h-4 bg-gray-200 rounded animate-pulse"></span>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="w-16 h-6 bg-gray-200 rounded animate-pulse"></span>
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </Card>
    );
};
