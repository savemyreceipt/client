export interface ITitle {
    title: string;
    subtitle: string;
}

export const Title: React.FC<ITitle> = ({ title, subtitle }) => {
    return (
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h1>
            <p className="text-center mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {subtitle}
            </p>
        </div>
    );
};

export const TitleSkeleton = () => {
    return (
        <div className="space-y-2 text-center">
            <div className="w-3/4 h-8 bg-gray-200 rounded mx-auto animate-pulse"></div>
            <div className="mx-auto max-w-[900px] space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    );
};
