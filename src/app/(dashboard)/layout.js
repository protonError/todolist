import { Inter } from "next/font/google";
import ThemeProviders from "@src/components/providers/ThemeProviders";
import { Toaster } from "@src/components/ui/toaster"
import { cookies } from "next/headers";
import "@src/styles/globals.css";
import Header from "@src/components/layout/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Manage todo list",
    description: "Todo List",
};

export default function RootLayout({ children }) {
    const isLogin = cookies().get('authtoken');
    return (
        <html lang="en">
            <body className={`${inter.className} bg-muted`}>
                <ThemeProviders
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <>
                    </>
                    <Header />
                    {children}
                    <Toaster />
                </ThemeProviders>
            </body>
        </html>
    );
}
