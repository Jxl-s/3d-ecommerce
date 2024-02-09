import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Product from "../../../components/Product";
import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function Home() {
    const t = useTranslations("Home");

    return (
        <>
            <p className="mt-5 text-black/50 w-full md:w-3/4 text-center md:text-start mx-auto md:mx-0 text-md dark:text-white/50">
                {t("subtitle.welcome_to")} <b>VirtuMarket</b>!{" "}
                {t("subtitle.before")}.
                <br />
                <br />
                {t("subtitle.source_github")}{" "}
                <Link
                    href={"https://github.com/Jxl-s/3d-ecommerce"}
                    target="_blank"
                    className="text-indigo-500 hover:text-indigo-400 duration-300"
                >
                    {t("subtitle.here")}
                </Link>
                , {t("subtitle.after")}.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
                <section className="col-span-2 xl:col-span-1">
                    <h1 className="text-xl font-semibold flex items-center justify-start">
                        <StarIcon className="h-6 w-6 inline-block me-2" />
                        <span>{t("Featured")}</span>
                    </h1>
                    <div className="bg-white rounded-lg p-2 drop-shadow-lg mt-2 dark:bg-neutral-900/70">
                        {/* TODO: Make this show real products instead of 3 random ones */}
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Fragment key={i}>
                                <Product
                                    name="Chair for two people"
                                    image="/images/chair.png"
                                    creator="BobbyMan123"
                                    stars={4}
                                    description="A chair to sit on, for people"
                                    price={18.99}
                                    ratingCount={1423}
                                />
                                {i < 2 && (
                                    <hr className="mx-2 dark:border-neutral-600/50" />
                                )}
                            </Fragment>
                        ))}
                    </div>
                </section>
                <section className="col-span-2 xl:col-span-1">
                    <h1 className="text-xl font-semibold flex items-center justify-start">
                        <CurrencyDollarIcon className="h-6 w-6 inline-block me-2" />
                        <span>{t("Best Sellers")}</span>
                    </h1>
                    <div className="bg-white rounded-lg p-2 drop-shadow-lg mt-2 dark:bg-neutral-900/70">
                        {/* TODO: Make this show real products instead of 3 random ones */}
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Fragment key={i}>
                                <Product
                                    name="Chair for two people"
                                    image="/images/chair.png"
                                    creator="BobbyMan123"
                                    stars={4}
                                    description="A chair to sit on, for people"
                                    price={18.99}
                                    ratingCount={1423}
                                />
                                {i < 2 && (
                                    <hr className="mx-2 dark:border-neutral-600/50" />
                                )}
                            </Fragment>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
