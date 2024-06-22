import Head from "next/head";

import { Button } from "@/components/forms/Button";
import { Input } from "@/components/forms/Input";
import { Label } from "@/components/forms/Label";
import { Textarea } from "@/components/forms/TextArea";
import { withProtectedRoute } from "@/components/guards/withProtectedRoute";
import { Title } from "@/components/typography/Title";

import { useNewGroup } from "@/hooks/groups/useNewGroup";

export default withProtectedRoute(function NewGroupPage() {
    const { nameRef, cityRef, organizationRef, descriptionRef, handleSubmit } = useNewGroup();

    return (
        <>
            <Head>
                <title>Save My Receipt | 그룹 생성</title>
            </Head>

            <div className="container mx-auto max-w-md py-12">
                <Title title="그룹 생성하기" subtitle="생성할 그룹에 대한 정보를 입력해주세요" />
                <div className="mt-8 space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">그룹명</Label>
                        <Input ref={nameRef} id="name" placeholder="그룹명을 입력해주세요" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="city">지역</Label>
                        <Input ref={cityRef} id="city" placeholder="지역을 입력해주세요" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="organization">단체 / 조직</Label>
                        <Input
                            ref={organizationRef}
                            id="organization"
                            placeholder="단체 / 조직의 이름을 입력해주세요"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">설명</Label>
                        <Textarea ref={descriptionRef} id="description" placeholder="그룹에 대한 설명을 입력해주세요" />
                    </div>
                    <Button className="w-full" onClick={handleSubmit}>
                        그룹 생성하기
                    </Button>
                </div>
            </div>
        </>
    );
});
