import { Button } from "@/components/ui/button";
import { faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function SelectRolePage() {
    return (
        <div className="w-full h-screen fixed top-0 left-0">
            <section className="w-full h-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat lg:col-span-1">
                <div className="fixed z-10 bg-gray-900/50 w-screen h-full" />
                <Image alt="Background" className="absolute inset-0 z-0 h-full w-full object-cover" fill src="/bg.png" />
                <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-black">Save My Receipt</h2>
                            <p className="text-gray-500">회원 유형을 선택해주세요</p>
                            <p className="text-gray-500">
                                <span>일반 사용자는 그룹에 가입하여 영수증을 업로드 할 수 있습니다</span> <br />
                                <span>회계 사용자는 그룹을 생성하고 수집된 영수증과 장부를 관리합니다</span>
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Button className="justify-start gap-2 text-black hover:bg-[#00a869]/90 hover:text-white" variant="white">
                                    <FontAwesomeIcon icon={faUser} />
                                    일반 사용자
                                </Button>
                                <Button className="justify-start gap-2 text-black hover:bg-[#00a869]/90 hover:text-white" variant="white">
                                    <FontAwesomeIcon icon={faUserGear} />
                                    회계 사용자
                                </Button>
                            </div>
                            <div className="text-sm text-gray-500">
                                계속하려면, 서비스 이용약관에 동의해야합니다
                                <Link className="underline" href="#">
                                    서비스 이용약관
                                </Link>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
