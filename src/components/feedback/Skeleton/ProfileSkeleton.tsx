export const ProfileSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-6 p-6 sm:p-10">
            <div className="animate-pulse flex h-24 w-24 shrink-0 overflow-hidden rounded-full bg-gray-200" />
            <div className="grid gap-1 text-center">
                <div className="animate-pulse w-24 h-6 bg-gray-200 rounded" />
                <div className="animate-pulse w-40 h-4 bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col gap-2 w-50">
                <div className="animate-pulse w-full max-w-[250px] h-10 bg-gray-200 rounded" />
                <div className="animate-pulse w-full max-w-[200px] h-10 bg-gray-200 rounded" />
            </div>
        </div>
    );
};
