import { cloneElement } from "react";

export interface IApplyProviders {
    providers: React.ReactElement[];
    children: React.ReactNode;
}

export const ApplyProviders: React.FC<IApplyProviders> = ({ providers, children }) => {
    return (
        <>
            {providers.reduceRight((providers, provider) => {
                return cloneElement(provider, {}, providers);
            }, children)}
        </>
    );
};
