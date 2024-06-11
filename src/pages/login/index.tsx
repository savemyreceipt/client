import Image from "next/image";
import { useEffect } from "react";

import { Spinner } from "@/components/feedback/Spinner/Spinner";

import { useAuth } from "@/hooks/member/useAuth";

export default function SelectRolePage() {
    const { signIn } = useAuth();

    useEffect(() => {
        signIn();
    }, [signIn]);

    return (
        <div className="w-full h-screen fixed top-0 left-0">
            <section className="w-full h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat lg:col-span-1">
                <div className="fixed z-10 bg-gray-900/50 w-screen h-full" />
                <Image
                    alt="Background"
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    fill
                    src="/bg.png"
                />
                <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-black text-center">Save My Receipt</h2>
                            <p className="text-gray-500 text-center">로그인 중입니다...</p>
                            <Spinner />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
