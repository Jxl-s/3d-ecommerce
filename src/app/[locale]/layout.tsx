import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";

import LayoutSideBar from "./components/LayoutSideBar";
import LayoutHeader from "./components/LayoutHeader";
import { HeroSvg } from "@/svgs";
import {
    HomeIcon,
    MagnifyingGlassCircleIcon,
    ShoppingCartIcon,
    PlusCircleIcon,
    ChartBarIcon,
    BookOpenIcon,
    PhoneArrowUpRightIcon,
    QuestionMarkCircleIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import Script from "next/script";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "3D eCommerce",
    description: "An eCommerce website featuring 3D displays of products",
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const t = useTranslations("SideBar");

    // Try prevent flickering
    const cookieStore = cookies();
    const themeCookie = cookieStore.get("theme")?.value;

    const appendTheme = themeCookie === "dark" ? "dark" : "";

    return (
        <html lang={locale} className={`${appendTheme}`}>
            <head>
                <Script id="dark-mode-handler" strategy="beforeInteractive">
                    {`
                    const isDark = document.cookie.includes('theme=dark');
                    const noTheme = !document.cookie.includes('theme=');
                    const isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches);

                    if (isDark || noTheme && isDefaultDark) {
                        document.documentElement.classList.add('dark')
                        document.cookie = "theme=dark;path=/;max-age=31536000"
                    } else {
                        document.documentElement.classList.remove('dark')
                        document.cookie = "theme=light;path=/;max-age=31536000"
                    }
                `}
                </Script>
            </head>

            <body
                className={
                    inter.className +
                    " flex flex-row dark:bg-neutral-800 dark:text-white duration-300"
                }
            >
                {/* Sidebar here, with the offset div */}
                <LayoutSideBar
                    dark={appendTheme === "dark"}
                    className={`w-0 hidden md:block md:w-[22em] p-5 md:p-10`}
                    objects={[
                        {
                            text: t("Main"),
                            type: "section",
                        },
                        {
                            icon: <HomeIcon />,
                            text: t("Home"),
                            type: "link",
                            active: true,
                            href: "/",
                        },
                        {
                            icon: <MagnifyingGlassCircleIcon />,
                            text: t("Browse"),
                            type: "link",
                            href: "/browse",
                        },
                        {
                            icon: <ShoppingCartIcon />,
                            text: t("Cart"),
                            type: "link",
                            href: "/cart",
                        },
                        {
                            text: t("Creator"),
                            type: "section",
                        },
                        {
                            icon: <PlusCircleIcon />,
                            text: t("New Product"),
                            type: "link",
                            href: "/new-product",
                        },
                        {
                            icon: <ChartBarIcon />,
                            text: t("Statistics"),
                            type: "link",
                            href: "/statistics",
                        },
                        {
                            text: t("Help and Support"),
                            type: "section",
                        },
                        {
                            icon: <BookOpenIcon />,
                            text: t("Contact"),
                            type: "link",
                            href: "/contact",
                        },
                        {
                            icon: <PhoneArrowUpRightIcon />,
                            text: t("Customer Service"),
                            type: "link",
                            href: "/customer-service",
                        },
                        {
                            icon: <QuestionMarkCircleIcon />,
                            text: t("FAQ"),
                            type: "link",
                            href: "/faq",
                        },
                        {
                            text: t("Account"),
                            type: "section",
                        },
                        {
                            icon: <AdjustmentsHorizontalIcon />,
                            text: t("Settings"),
                            type: "link",
                            href: "/account",
                        },
                    ]}
                />
                <div className={`me-0 md:me-[22em] duration-300`} />

                {/* Remaining content here */}
                <main className={`flex-grow p-5 md:p-10`}>
                    <LayoutHeader name={t("Home")} />
                    {children}
                </main>
            </body>
        </html>
    );
}
