"use client";

import Button from "@/components/Button";
import { HeroSvg } from "@/svgs";

interface Props {
    content: string;
}

export default function LayoutCartButton({ content }: Props) {
    return (
        <Button theme="primary" className="col-span-1">
            <HeroSvg name="shopping-cart" />{" "}
            <span className="font-semibold text-sm hidden xl:block ml-2">
                {content}
            </span>
        </Button>
    );
}
