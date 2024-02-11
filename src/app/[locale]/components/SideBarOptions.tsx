"use client";

import ListBox from "@/components/ListBox";
import Switch from "@/components/Switch";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

interface Props {
    values: {
        dark: boolean;
        language: string;
    };
    strings: {
        theme: string;
        language: string;
    };
}

export default function SideBarOptions({ values, strings }: Props) {
    const [dark, setDark] = useState(values.dark);

    // To set it for the first visit
    useEffect(() => {
        // Poll the cookie
        const interval = setInterval(() => {
            if (document.cookie.includes("theme=light")) return;

            if (document.cookie.includes("theme=dark")) {
                setDark(true);
                clearInterval(interval);
                return;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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

    // Handle the language switch
    const languageList = [
        { display: "English", value: "en" },
        { display: "Francais", value: "fr" },
    ];

    const selectedLanguage =
        languageList.find((l) => l.value === values.language) ??
        languageList[0];

    return (
        <>
            <div className="grid grid-cols-5 items-center justify-between gap-2 mx-4">
                <span className="font-medium text-sm text-gray-600 dark:text-neutral-500 col-span-2">
                    {strings.language}
                </span>
                <div className="w-full col-span-3">
                    <ListBox
                        list={languageList}
                        showAbove
                        selected={selectedLanguage}
                    />
                </div>
            </div>
            <div className="grid grid-cols-5 items-center justify-between gap-2 mx-4 my-2">
                <span className="font-medium text-sm text-gray-600 dark:text-neutral-500 col-span-2">
                    {strings.theme}
                </span>
                <div className="flex items-center justify-center gap-2 col-span-3">
                    <SunIcon className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
                    <Switch enabled={dark} onChange={updateTheme} />
                    <MoonIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
                </div>
            </div>
        </>
    );
}
