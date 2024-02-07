"use client";

import { HeroSvg } from "@/svgs";
import Button from "./Button";

function SideBarSection({ children }: React.HTMLAttributes<HTMLDivElement>) {
    return <p className="opacity-75 text-sm px-4 mt-4 mb-2">{children}</p>;
}

interface SideBarItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active: boolean;
    icon: React.ReactNode;
    text: string;
}

function SideBarItem({ active, icon, text, onClick }: SideBarItemProps) {
    const backgroundColor = active
        ? "bg-gray-200 hover:bg-gray-300"
        : "hover:bg-gray-100";

    const textColor = active
        ? "text-indigo-500 hover:text-indigo-600"
        : "text-gray-600 hover:text-black";

    const lineColor = active ? "bg-indigo-700" : "";

    return (
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
    );
}

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function SideBar({ className }: SideBarProps) {
    return (
        <div
            className={
                "h-screen duration-300 overflow-hidden fixed " + className
            }
        >
            <div className="h-full w-full bg-white rounded-lg drop-shadow-lg pt-3 flex flex-col">
                <h1 className="font-bold text-2xl text-center">VirtuMarket</h1>
                <hr className="mt-2 mx-4" />
                <div className="grow overflow-y-auto no-scrollbar">
                    <SideBarSection>Main</SideBarSection>

                    <SideBarItem
                        active={true}
                        icon={<HeroSvg name="home" />}
                        text="Home"
                    />
                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="magnifying-glass-circle" />}
                        text="Browse"
                    />
                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="shopping-cart" />}
                        text="Cart"
                    />

                    <SideBarSection>Creator</SideBarSection>

                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="plus-circle" />}
                        text="New Product"
                    />
                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="chart-bar" />}
                        text="Statistics"
                    />

                    <SideBarSection>Help and Support</SideBarSection>

                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="book-open" />}
                        text="Contact"
                    />
                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="phone-arrow-up-right" />}
                        text="Customer Service"
                    />
                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="question-mark-circle" />}
                        text="FAQ"
                    />

                    <SideBarSection>Account</SideBarSection>

                    <SideBarItem
                        active={false}
                        icon={<HeroSvg name="adjustments-horizontal" />}
                        text="Settings"
                    />
                </div>
                <hr className="mt-2 mx-4" />
                <div className="p-3">
                    <Button
                        theme="danger"
                        className="flex items-center justify-center gap-3 w-full"
                    >
                        <HeroSvg name="x-mark" />
                        <span className="font-semibold text-sm">Sign Out</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
