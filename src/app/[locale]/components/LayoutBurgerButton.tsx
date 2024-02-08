"use client";

import { useLayoutStore } from "@/stores/layoutStore";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function LayoutBurgerButton() {
    const sideBarOpened = useLayoutStore((s) => s.sideBarOpened);
    const setSideBarOpened = useLayoutStore((s) => s.setSideBarOpened);

    const onClick = () => setSideBarOpened(true);
    const onDismiss = () => setSideBarOpened(false);

    return (
        <>
            <div onClick={onClick} className="cursor-pointer">
                <Bars3Icon
                    className={`${
                        sideBarOpened && "hidden "
                    } w-8 h-8 text-black dark:text-white`}
                />
            </div>

            <div
                className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-lg z-10 ${
                    !sideBarOpened && "hidden"
                }`}
                onClick={onDismiss}
            />
        </>
    );
}
