import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="kr">
            <Head />

            <body>
                <main className="w-full max-w-[1400px] mx-auto mt-16 min-h-screen px-5">
                    <Main />
                </main>
                <NextScript />
            </body>
        </Html>
    );
}
