import { HeroSvg } from "@/svgs";
import Button from "../../../components/Button";
import SideBarItem from "./SideBarItem";
import { useTranslations } from "next-intl";
import Toggle from "@/components/Toggle";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
    objects: {
        type: "section" | "link";
        text: string;
        icon?: React.ReactNode;
        active?: boolean;
        href?: string;
    }[];
}

export default function LayoutSideBar({ className, objects }: SideBarProps) {
    const t = useTranslations("SideBar");

    return (
        <div
            className={
                "h-screen duration-300 overflow-hidden fixed " + className
            }
        >
            <div className="h-full w-full bg-white rounded-lg pt-3 flex flex-col dark:bg-neutral-900 shadow-lg">
                <h1 className="font-bold text-2xl text-center dark:text-white">
                    VirtuMarket
                </h1>
                <hr className="mt-2 mx-4 dark:border-neutral-600" />
                <div className="grow overflow-y-auto no-scrollbar">
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
                                    active={o.active ?? false}
                                    icon={o.icon}
                                    text={o.text}
                                    href={o.href}
                                />
                            );
                        }
                    })}
                </div>
                <hr className="my-2 mx-4 dark:border-neutral-600" />

                <div className="flex items-center gap-2 px-4">
                    <SunIcon className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
                    <Toggle />
                    <MoonIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
                </div>

                <hr className="mt-2 mx-4 dark:border-neutral-600" />
                <div className="p-3">
                    <Button
                        theme="danger"
                        className="flex items-center justify-center gap-3 w-full"
                    >
                        <HeroSvg name="x-mark" />
                        <span className="font-semibold text-sm">
                            {t("Sign Out")}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
