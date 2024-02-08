"use client";

import Switch from "@/components/Switch";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface Props {
    value: boolean;
    content: string;
}

export default function SideBarThemeSwitch({ value, content }: Props) {
    const [dark, setDark] = useState(value);

    const updateTheme = (v: boolean) => {
        if (v) {
            document.documentElement.classList.add("dark");
            document.cookie = "theme=dark;path=/;max-age=31536000";
        } else {
            document.documentElement.classList.remove("dark");
            document.cookie = "theme=light;path=/;max-age=31536000";
        }

        setDark(v);
    };

    return (
        <div className="flex items-center justify-between gap-2 mx-4 my-2">
            <span className="font-medium text-sm text-gray-600 dark:text-neutral-500">
                {content}
            </span>
            <div className="flex items-center gap-2 px-4">
                <SunIcon className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
                <Switch enabled={dark} onChange={updateTheme} />
                <MoonIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
            </div>
        </div>
    );
}
