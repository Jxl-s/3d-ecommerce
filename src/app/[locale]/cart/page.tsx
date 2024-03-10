import CartProduct from "@/components/CartProduct";
import Product from "@/components/Product";
import Button from "@/components/interactive/Button";
import { StarIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

export default function Cart() {
    const t = useTranslations("Cart");

    return (
        <div className="grid grid-cols-2 gap-6 mt-6">
            <section className="col-span-2 xl:col-span-1">
                <h1 className="text-xl font-semibold flex items-center justify-start">
                    {t("Shopping Cart")}
                </h1>
                <div className="bg-white rounded-lg p-2 drop-shadow-md mt-2 dark:bg-neutral-900/70">
                    {/* TODO: Make this show real products instead of 3 random ones */}
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Fragment key={i}>
                            <CartProduct
                                name="Chair for two people"
                                image="/images/chair.png"
                                creator="BobbyMan123"
                                stars={4}
                                price={18.99}
                                ratingCount={1423}
                            />
                            <hr className="mx-2 dark:border-neutral-600/50" />
                        </Fragment>
                    ))}
                    <span className="text-right w-full block mt-2">
                        {t("Subtotal")} (3 {t("Items")}):{" "}
                        <span className="text-indigo-600 font-bold dark:text-indigo-400">
                            $56.97
                        </span>
                    </span>
                </div>
            </section>
            <section className="col-span-2 xl:col-span-1">
                <h1 className="text-xl font-semibold flex items-center justify-start">
                    {t("Go to Checkout")}
                </h1>
                <div className="bg-white rounded-lg p-2 drop-shadow-md mt-2 dark:bg-neutral-900/70">
                    <span className="text-center text-lg w-full block">
                        {t("Subtotal")} (3 {t("Items")}):{" "}
                        <span className="text-indigo-600 font-bold dark:text-indigo-400">
                            $56.97
                        </span>
                    </span>
                    <Button theme="primary" className="font-semibold mt-2">
                        {t("Go to Checkout")}
                    </Button>
                </div>
            </section>
        </div>
    );
}
