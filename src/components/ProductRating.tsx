import { numberWithCommas } from "@/util/number";
import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
    stars: number;
    ratingCount: number;
    className?: string;
}

export default function ProductRating({ stars, ratingCount, className }: Props) {
    return (
        <div className={`flex items-center ${className}`}>
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
    );
}
