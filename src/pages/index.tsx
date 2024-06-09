import Image from "next/image";
import { useRouter } from "next/router";

import { Button } from "@/components/forms/Button";

import { OAUTH_REDIRECT_URL } from "@/hooks/member/useAuth";

export default function MainPage() {
    const router = useRouter();

    const handleLogin = () => {
        router.replace(OAUTH_REDIRECT_URL);
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col">
            <div className="relative w-full h-screen">
                <Image alt="background" className="w-full h-full object-cover" fill src="/bg.png" />
                <div className="absolute inset-0 bg-gray-900/70 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Save My Receipt</h1>
                    <p className="text-lg text-gray-300 mb-8">영수증을 업로드하고 회계장부를 손쉽게 관리하세요</p>
                    <Button variant="white" className="w-full max-w-[300px]" onClick={handleLogin}>
                        <Image className="mx-1" src="/logo_google.png" alt="" width={20} height={20} />
                        구글 계정으로 로그인
                    </Button>
                </div>
            </div>
        </div>
    );
}
