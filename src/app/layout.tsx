import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Button from "@/components/Button";
import { HeroSvg } from "@/svgs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "3D eCommerce",
    description: "An eCommerce website featuring 3D displays of products",
};

interface PageHeaderProps {
    name: string;
}

function PageHeader({ name }: PageHeaderProps) {
    return (
        <header className="grid grid-cols-6 items-center md:items-start justify-between">
            <div className="col-span-1 md:hidden"></div>
            <div className="col-span-4 md:col-span-5 text-center md:text-start">
                <h1 className="text-2xl md:text-5xl font-semibold">
                    VirtuMarket
                    <span className="hidden md:inline"> - {name}</span>
                </h1>
                <p className="text-black/25 hidden md:block">
                    Empowering your virtual shopping experience
                </p>
            </div>
            <Button theme="primary" className="col-span-1">
                <HeroSvg name="shopping-cart" />
                <span className="hidden md:block ml-2">Cart</span>
            </Button>
        </header>
    );
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " flex flex-row"}>
                {/* Sidebar here, with the offset div */}
                <SideBar
                    className={`w-0 hidden md:block md:w-[22em] p-5 md:p-10`}
                />
                <div className={`me-0 md:me-[22em] duration-300`} />

                {/* Remaining content here */}
                <main className={`flex-grow p-5 md:p-10`}>
                    <PageHeader name="Home" />
                    {children}
                </main>
            </body>
        </html>
    );
}
