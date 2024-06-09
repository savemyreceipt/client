import { Button } from "@/components/forms/Button";

import { Card } from "./style";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IReceiptCard {
    id: number;
    imageUri: string;
    category: string;
    description: string;
    purchaseDate: string;
    price: 0;
    checked: true;
}

export const ReceiptCard: React.FC<IReceiptCard> = ({
    imageUri,
    category,
    description,
    purchaseDate,
    price,
    checked,
}) => {
    return (
        <Card className="p-3 flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faReceipt} />
                    <span className="text-sm font-medium">Acme Co.</span>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Apr 15, 2023</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">$42.50</span>
                <Button size="sm" variant="outline">
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
