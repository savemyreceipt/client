import { GroupCard } from "@/components/display/GroupCard";
import { SearchBar } from "@/components/forms/SearchBar";

export default function groups() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="grid gap-6 p-4 md:p-10">
                <div className="h-[200px] flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Search Groups</h1>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Discover and join the best groups for your interests.</p>
                    </div>
                    <SearchBar placeholder="키워드로 그룹을 검색해주세요" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                </div>
            </main>
        </div>
    );
}
