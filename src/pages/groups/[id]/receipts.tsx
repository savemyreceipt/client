import { ReceiptCard, ReceiptCardSkeleton } from "@/components/display/Cards/ReceiptCard";
import { withProtectedRoute } from "@/components/guards/withProtectedRoute";
import { Pagination } from "@/components/navigation/Pagination/Pagination";
import { Title } from "@/components/typography/Title";

import { useReceipt } from "@/hooks/receipt/useReceipt";

export default withProtectedRoute(function GroupReceiptPage() {
    const { isPending, data } = useReceipt();

    return (
        <div className="container mx-auto">
            <div className="container mx-auto max-w-md py-12">
                <Title title="업로드된 영수증" subtitle="그룹에 대한 영수증"></Title>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {isPending
                    ? Array.from({ length: 12 }).map((_, key) => {
                          return <ReceiptCardSkeleton key={key} />;
                      })
                    : data?.content.map((receipt) => {
                          return (
                              <ReceiptCard
                                  key={receipt.id}
                                  id={receipt.id}
                                  category={receipt.category}
                                  purchaseDate={receipt.purchaseDate}
                                  price={receipt.price}
                              />
                          );
                      })}
            </div>

            <Pagination totalPages={data?.totalPages as number} />
        </div>
    );
});
