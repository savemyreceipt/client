import { UploadModal } from "./UploadModal";
import { useUploadModal } from "@/context/UploadModalContext";

export const RootModal = () => {
    const { isModalOpened } = useUploadModal();

    return <>{isModalOpened && <UploadModal />}</>;
};
