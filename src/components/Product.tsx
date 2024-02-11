import Button from "@/components/interactive/Button";
import { numberWithCommas } from "@/util/number";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./ProductRating";

interface Props {
    name: string;
    price: number;
    description: string;

    image: string;

    creator: string;

    stars: number;
    ratingCount: number;

    homeProduct?: boolean;
    className?: string;
}

export default function Product({
    name,
    image,
    creator,
    stars,
    ratingCount,
    description,
    price,
    homeProduct,
    className,
}: Props) {
    const t = useTranslations();

    return (
        <div
            className={`p-2 pb-0 flex ${
                homeProduct ? "" : "bg-white dark:bg-neutral-900 shadow-lg rounded-lg xl:flex-col gap-2"
            } ${className}`}
        >
            <div className="me-2 flex items-start justify-center border border-black/10 xl:rounded-lg">
                <Image
                    src={image}
                    className="object-contain rounded-lg w-full"
                    alt="Product Picture"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2">
                    <div className="w-full">
                        <span className="font-bold inline-block xl:text-lg">
                            {name}
                        </span>

                        <span className="text-[10px] mt-[-2.5px] block xl:text-xs">
                            {t("Common.by")}{" "}
                            <Link href="#">
                                <span className="text-indigo-600 dark:text-indigo-400 font-semibold underline">
                                    {creator}
                                </span>
                            </Link>
                        </span>
                    </div>

                    <div>
                        <Button theme="primary" className="px-3 h-8">
                            +
                            <ShoppingCartIcon className="h-5 w-5 ms-1 inline-block" />
                        </Button>
                    </div>
                </div>
                <ProductRating
                    stars={stars}
                    ratingCount={ratingCount}
                    className="mt-1"
                />
                <span className="text-[10px] opacity-50 font-medium dark:font-normal xl:text-sm">
                    {description}
                </span>
                <div className="flex items-end justify-end flex-grow my-1">
                    <span className="font-bold dark:font-semibold text-lg">${price}</span>
                </div>
            </div>
        </div>
    );
}
