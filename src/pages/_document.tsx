import { NavBar } from "@/components/navigation/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <NavBar />

            <body>
                <main className="w-full max-w-[1400px] mx-auto">
                    <Main />
                </main>
                <NextScript />
            </body>
        </Html>
    );
}
