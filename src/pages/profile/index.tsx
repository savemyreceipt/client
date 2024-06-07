import { Avatar, AvatarFallback, AvatarImage } from "@/components/display/Avatar";
import { Button } from "@/components/forms/Button";
import { useProfile } from "@/context/ProfileContext";

export default function ProfilePage() {
    const profile = useProfile();

    return (
        <div className="flex flex-col items-center gap-6 p-6 sm:p-10">
            <Avatar className="h-24 w-24">
                <AvatarImage alt="@shadcn" src={profile.profileUri} />
                <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-center">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">{profile.email}</p>
            </div>

            <div className="flex flex-col gap-2 w-50">
                <Button className="w-full max-w-[250px]" variant="white">
                    프로필 수정하기
                </Button>

                <Button className="w-full max-w-[200px]" variant="destructive">
                    회원 탈퇴하기
                </Button>
            </div>
        </div>
    );
}
