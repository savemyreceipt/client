import { withProtectedRoute } from "@/components/guards/withProtectedRoute";
import { Title } from "@/components/typography/Title";

export default withProtectedRoute(function GroupReceiptPage() {
    return (
        <>
            <Title title="" subtitle="그룹에 대한 영수증"></Title>
        </>
    );
});
