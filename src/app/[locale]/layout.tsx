import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "@/app/[locale]/components/SideBar";
import Button from "@/components/Button";
import { HeroSvg } from "@/svgs";
import LayoutHeader from "./components/LayoutHeader";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "3D eCommerce",
    description: "An eCommerce website featuring 3D displays of products",
};

interface PageHeaderProps {
    name: string;
}

function PageHeader({ name }: PageHeaderProps) {
    const t = useTranslations("SideBar");

    return (
        <header className="grid grid-cols-6 items-center md:items-start justify-between">
            <LayoutHeader name={name} />

            <Button theme="primary" className="col-span-1">
                <HeroSvg name="shopping-cart" />

                <span className="font-semibold text-sm hidden xl:block ml-2">
                    {t("Cart")}
                </span>
            </Button>
        </header>
    );
}
export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const t = useTranslations("SideBar");

    return (
        <html lang={locale}>
            <body className={inter.className + " flex flex-row"}>
                {/* Sidebar here, with the offset div */}
                <SideBar
                    className={`w-0 hidden md:block md:w-[22em] p-5 md:p-10`}
                />
                <div className={`me-0 md:me-[22em] duration-300`} />

                {/* Remaining content here */}
                <main className={`flex-grow p-5 md:p-10`}>
                    <PageHeader name={t("Home")} />
                    {children}
                </main>
            </body>
        </html>
    );
}
