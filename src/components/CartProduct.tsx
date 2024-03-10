import Button from "@/components/interactive/Button";
import { numberWithCommas } from "@/util/number";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./ProductRating";
import InputWithIcon from "./interactive/InputWithIcon";

interface Props {
    name: string;
    price: number;
    image: string;

    creator: string;

    stars: number;
    ratingCount: number;

    className?: string;
}

export default function CartProduct({
    name,
    image,
    creator,
    stars,
    ratingCount,
    price,
    className,
}: Props) {
    const t = useTranslations();

    return (
        <div className={`p-2 pb-0 flex ${className}`}>
            <div
                className={`me-2 flex items-start justify-center xl:rounded-lg`}
            >
                <Image
                    src={image}
                    className="object-contain rounded-lg"
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
                </div>
                <ProductRating
                    stars={stars}
                    ratingCount={ratingCount}
                    className="mt-1"
                />
                <div className="flex items-center justify-between flex-grow my-2 gap-4 h-8">
                    <div className="flex items-center justify-start gap-2 h-full w-full">
                        <span className="text-xs text-neutral-400">Qty:</span>
                        <InputWithIcon
                            icon={null}
                            placeholder="1"
                            value={2}
                            type="number"
                            height={8}
                            className="border border-black/10 rounded-lg dark:border-white/10"
                            inputAttr={{
                                className: "text-xs text-center",
                                min: 1,
                            }}
                        />
                        <Button
                            theme="danger"
                            className="font-semibold h-full text-xs max-w-32"
                        >
                            Delete
                        </Button>
                    </div>

                    <span className="font-bold dark:font-semibold text-lg">
                        ${price}
                    </span>
                </div>
            </div>
        </div>
    );
}
