import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "3D eCommerce",
    description: "An eCommerce website featuring 3D displays of products",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " flex flex-row"}>
                <SideBar className={`w-[22em] p-10`} />
                <div className={`me-[22em] duration-300`} />
                <main className={`flex-grow p-10`}>{children}</main>
            </body>
        </html>
    );
}
