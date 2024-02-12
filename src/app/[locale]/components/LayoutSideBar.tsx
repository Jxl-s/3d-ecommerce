"use client";

import { HeroSvg } from "@/svgs";
import Button from "../../../components/interactive/Button";
import SideBarItem from "./SideBarItem";
import { useEffect } from "react";
import { useLayoutStore } from "@/stores/layoutStore";
import SideBarOptions from "./SideBarOptions";
import { usePathname } from "next/navigation";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
    objects: {
        type: "section" | "link";
        text: string;
        icon?: React.ReactNode;
        active?: boolean;
        href?: string;
    }[];
    values: {
        dark: boolean;
        language: string;
    };
    strings: {
        theme: string;
        language: string;
        signOut: string;
    };
}

export default function LayoutSideBar({
    className,
    objects,
    values,
    strings,
}: SideBarProps) {
    const pathname = usePathname();

    const sideBarOpened = useLayoutStore((s) => s.sideBarOpened);
    const setSideBarOpened = useLayoutStore((s) => s.setSideBarOpened);

    useEffect(() => {
        const onResize = () => {
            // If it's less than lg, close
            const sideBarOpened = useLayoutStore.getState().sideBarOpened;
            if (window.innerWidth < 768 && sideBarOpened) {
                // Close the sidebar
                console.log("close!");
                setSideBarOpened(false);
            }

            // More than lg, open
            if (window.innerWidth > 768 && !sideBarOpened) {
                console.log("open!");
                setSideBarOpened(true);
            }
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [setSideBarOpened]);

    return (
        <div
            className={
                `h-screen duration-300 overflow-hidden fixed z-30 ` +
                (sideBarOpened ? `w-[22em] md:p-10 p-5` : "w-0 p-0") +
                (className ?? "")
            }
        >
            <div className="h-full w-full bg-white rounded-lg pt-3  dark:bg-neutral-900 shadow-md duration-300">
                <div
                    className={`${
                        !sideBarOpened && "hidden"
                    } h-full w-full flex flex-col`}
                >
                    <h1 className="font-bold text-2xl text-center dark:text-white">
                        VirtuMarket
                    </h1>
                    <hr className="mt-2 mx-4 dark:border-neutral-600/50" />
                    <div className={`grow overflow-y-auto no-scrollbar`}>
                        {objects.map((o, i) => {
                            if (o.type === "section") {
                                return (
                                    <p
                                        className="opacity-75 text-sm px-4 mt-4 mb-2 dark:text-white font-medium"
                                        key={i}
                                    >
                                        {o.text}
                                    </p>
                                );
                            }

                            if (o.type === "link") {
                                return (
                                    <SideBarItem
                                        key={i}
                                        // active={o.active ?? false}
                                        active={pathname === o.href}
                                        icon={o.icon}
                                        text={o.text}
                                        href={o.href}
                                    />
                                );
                            }
                        })}
                    </div>

                    <SideBarOptions
                        values={{
                            dark: values.dark,
                            language: values.language,
                        }}
                        strings={{
                            theme: strings.theme,
                            language: strings.language,
                        }}
                    />

                    <hr className="mt-2 mx-4 dark:border-neutral-600/50" />
                    <div className="p-3">
                        <Button
                            theme="danger"
                            className="flex items-center justify-center gap-3 w-full"
                        >
                            <HeroSvg name="x-mark" />
                            <span className="font-semibold text-sm">
                                {strings.signOut}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
