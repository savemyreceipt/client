import { IReadProfileResponse } from "@/services/member/member.types";
import { memberService } from "@/services/member/memeber.service";
import { useQuery } from "@tanstack/react-query";
import { profile } from "console";
import { createContext, useContext } from "react";

export const ProfileContext = createContext({
    email: "",
    name: "",
    profileUri: "",
});

export const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { isPending, data } = useQuery<IReadProfileResponse>({
        queryKey: ["members"],
        queryFn: () => memberService.readProfile(),
    });

    return (
        <ProfileContext.Provider
            value={{
                email: data?.data.email as string,
                name: data?.data.name as string,
                profileUri: data?.data.profileUri as string,
            }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const profileContext = useContext(ProfileContext);
    if (!profileContext) throw new Error("useProfile hook 은 ProfileContextProvider 내부에서 사용되어야 합니다");
    return profileContext;
};
