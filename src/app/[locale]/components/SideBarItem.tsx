"use client";

import Link from "next/link";

interface SideBarItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active: boolean;
    icon: React.ReactNode;
    text: string;
    href?: string;
}

// An item part of the list of the sidebar
export default function SideBarItem({
    active,
    icon,
    text,
    href,
    onClick,
}: SideBarItemProps) {
    const backgroundColor = active
        ? "bg-gray-200 hover:bg-gray-300 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
        : "hover:bg-gray-100 dark:hover:bg-gray-700/20";

    const textColor = active
        ? "text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
        : "text-gray-600 hover:text-black dark:text-neutral-500 dark:hover:text-white";

    const lineColor = active ? "bg-indigo-700" : "";

    return (
        <Link href={href ?? "#"}>
            <div
                className={`${backgroundColor} flex items-center justify-between duration-300 cursor-pointer h-12`}
                onClick={onClick}
            >
                <div
                    className={`${textColor} ps-8 flex items-center gap-4 duration-300 active:translate-y-0.5 w-full h-full`}
                >
                    <div className="w-6 h-6">{icon}</div>
                    <span className="text-sm">{text}</span>
                </div>
                <div className={`h-full text-start ${lineColor} w-1`}></div>
            </div>
        </Link>
    );
}
