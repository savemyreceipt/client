/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/display/DropDown/DropDown";
import { NotificationDropDown } from "@/components/display/DropDown/NotificationDropDown";

import { useAuth } from "@/hooks/member/useAuth";

import { BellIcon } from "@/assets/BellIcon";

import { navDropDownItems, navItems } from "@/constants/navItems";

import { Button } from "../../forms/Button";
import { useProfile } from "@/context/ProfileContext";

export const NavBar = () => {
    const router = useRouter();

    const { signOut } = useAuth();
    const profile = useProfile();

    return (
        <header className="z-40 fixed top-0 left-0 w-screen flex items-center h-16 px-4 border-b shrink-0 bg-white md:px-6">
            <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="/groups">
                <img src="/logo_main.svg" className="h-[25px] hidden md:block" alt="" />
                <img src="/favicon.ico" className="h-[25px] block md:hidden" alt="" />
            </Link>

            <nav className="mx-10 flex gap-3 sm:mx-5 md:flex md:items-center md:gap-5 lg:gap-6 sm:flex sm:gap-3">
                {navItems.map((navItem) => {
                    return (
                        <Link className="text-gray-500" href={navItem.href} key={navItem.id}>
                            {navItem.text}
                        </Link>
                    );
                })}
            </nav>

            <div className="flex items-center gap-4 ml-auto mr-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <BellIcon className="w-5 h-5 text-gray-900" />
                        </Button>
                    </DropdownMenuTrigger>
                    <NotificationDropDown />
                </DropdownMenu>
            </div>

            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size="icon" variant="ghost">
                            <img
                                alt="Avatar"
                                className="rounded-full"
                                height="32"
                                src={profile.profileUri}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuLabel className="my-2">{profile.name} 님 안녕하세요</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {navDropDownItems.map((navDropDownItem) => {
                            return (
                                <DropdownMenuItem
                                    key={navDropDownItem.id}
                                    onClick={() => {
                                        router.push(navDropDownItem.href);
                                    }}
                                >
                                    {navDropDownItem.text}
                                </DropdownMenuItem>
                            );
                        })}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={signOut}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};
