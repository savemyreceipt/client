import { GroupCard, GroupCardSkeleton } from "@/components/display/GroupCard";
import { SearchBar } from "@/components/forms/SearchBar";
import { withProtectedRoute } from "@/components/guards/withProtectedRoute";
import { Title } from "@/components/typography/Title";
import { useSearchGroup } from "@/hooks/useSearchGroup";

export default withProtectedRoute(function GroupsPage() {
    const { inputRef, isPending, data, handleChange } = useSearchGroup();

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grid gap-6 p-4 md:p-10">
                <div className="h-[200px] flex flex-col items-center justify-center space-y-4 text-center">
                    <Title title="그룹 검색" subtitle="키워드로 가입할 그룹을 검색해주세요" />
                    <SearchBar ref={inputRef} placeholder="키워드로 그룹을 검색해주세요" onChange={handleChange} />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {isPending
                        ? Array.from({ length: 12 }).map(() => {
                              // eslint-disable-next-line react/jsx-key
                              return <GroupCardSkeleton />;
                          })
                        : data?.data.map((group) => {
                              return (
                                  <GroupCard
                                      key={group.id}
                                      city={group.city}
                                      organization={group.organization}
                                      name={group.name}
                                      receiptCount={group.receiptCount}
                                      memberCount={group.memberCount}
                                      accountant={group.accountant}
                                      description={group.description}
                                  />
                              );
                          })}
                </div>
            </main>
        </div>
    );
});
