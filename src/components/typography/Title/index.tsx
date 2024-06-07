export interface ITitle {
    title: string;
    subtitle: string;
}

export const Title: React.FC<ITitle> = ({ title, subtitle }) => {
    return (
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h1>
            <p className="text-center mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{subtitle}</p>
        </div>
    );
};
