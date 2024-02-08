"use client";

import Button from "@/components/Button";
import { HeroSvg } from "@/svgs";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
    content: string;
}

export default function LayoutCartButton({ content }: Props) {
    return (
        <Link href="./cart">
            <Button theme="primary" className="col-span-1">
                <ShoppingCartIcon className="w-6 h-6"/>{" "}
                <span className="font-semibold text-sm hidden xl:block ml-2">
                    {content}
                </span>
            </Button>
        </Link>
    );
}
