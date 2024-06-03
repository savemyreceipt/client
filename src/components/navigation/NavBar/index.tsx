import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { Button } from "../../forms/Button";

export const NavBar = () => {
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 bg-white md:px-6">
            <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
                Save My Receipt
            </Link>

            <nav className="mx-10 flex gap-3 md:flex md:items-center md:gap-5 lg:gap-6 sm:flex sm:gap-3">
                <Link className="text-gray-500" href="#">
                    Home
                </Link>
                <Link className="text-gray-500" href="#">
                    Search
                </Link>
                <Link className="text-gray-500" href="#">
                    Analytics
                </Link>
                <Link className="text-gray-500" href="#">
                    Settings
                </Link>
            </nav>
            <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size="icon" variant="ghost">
                            <img
                                alt="Avatar"
                                className="rounded-full"
                                height="32"
                                src="/placeholder-user.jpg"
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
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};
