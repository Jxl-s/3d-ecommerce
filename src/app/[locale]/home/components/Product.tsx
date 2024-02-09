import Button from "@/components/Button";
import { numberWithCommas } from "@/util/number";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string;
    picture: string;
    creator: string;
    stars: number;
    ratingCount: number;
    description: string;
    price: number;
}

export default function Product({
    name,
    picture,
    creator,
    stars,
    ratingCount,
    description,
    price,
}: Props) {
    const t = useTranslations();

    return (
        <div className="p-2 pb-0 flex">
            <div className="me-2 flex items-start justify-center">
                <Image
                    src={picture}
                    className="rounded-lg"
                    alt="Product Picture"
                    width={100}
                    height={100}
                    objectFit="contain"
                />
            </div>

            <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <span className="font-bold block xl:text-lg">{name}</span>

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
                <div className="mt-1 flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon
                            key={i}
                            className={`h-3 w-3 me-[2px] inline-block ${
                                i < stars
                                    ? "text-indigo-600 dark:text-indigo-400"
                                    : "text-neutral-400"
                            }`}
                        />
                    ))}
                    <span className="font-semibold text-indigo-600 ms-2 text-xs dark:text-indigo-400">
                        {numberWithCommas(ratingCount)}
                    </span>
                </div>
                <span className="text-[10px] opacity-50 font-medium overflow-hidden inline-block text-wrap xl:text-sm">
                    {description.length < 33
                        ? description
                        : description.slice(0, 30) + "..."}
                </span>
                <div className="flex items-end justify-end flex-grow my-1">
                    <span className="font-bold text-lg ">${price}</span>
                </div>
            </div>
        </div>
    );
}
