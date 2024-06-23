import { DetailModal } from "./DetailModal";
import { UploadModal } from "./UploadModal";
import { useDetailModal } from "@/context/DetailModalContext";
import { useUploadModal } from "@/context/UploadModalContext";

export const RootModal = () => {
    const { isModalOpened } = useUploadModal();
    const { isModalOpened: isDetailModalOpened } = useDetailModal();

    return (
        <>
            {isModalOpened && <UploadModal />}
            {isDetailModalOpened && <DetailModal />}
        </>
    );
};
