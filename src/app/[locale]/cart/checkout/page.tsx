import CartProduct from "@/components/CartProduct";
import Button from "@/components/interactive/Button";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

export default function Checkout() {
    const t = useTranslations("Cart");

    return (
        <section>
            <h1 className="text-2xl font-semibold mt-4">
                {t("Shipping Address")}
            </h1>
            <p className="opacity-50">
                {t("address_hint")}
            </p>

            <h1 className="text-2xl font-semibold mt-4">
                {t("Payment Methods")}
            </h1>
            <p className="opacity-50">
                {t("payment_hint")}
            </p>

            <div className="grid grid-cols-2 gap-6">
                <section className="col-span-2 xl:col-span-1">
                    <h1 className="text-2xl font-semibold mt-4">
                        {t("Review Items")}
                    </h1>
                    <div className="bg-white rounded-lg p-2 drop-shadow-md mt-2 dark:bg-neutral-900/70">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Fragment key={i}>
                                <CartProduct
                                    name="Chair for two people"
                                    image="/images/chair.png"
                                    creator="BobbyMan123"
                                    stars={4}
                                    price={18.99}
                                    ratingCount={1423}
                                    page="checkout"
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
                    <h1 className="text-2xl font-semibold mt-4">
                        {t("Order Summary")}
                    </h1>
                    <div className="bg-white rounded-lg p-2 drop-shadow-md mt-2 dark:bg-neutral-900/70">
                        <ul className="p-2">
                            <li className="flex items-center justify-between">
                                <span className="w-full">{t("Items")}:</span>
                                <span className="w-full font-bold dark:font-semibold">
                                    $56.97
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="w-full">{t("Shipping")}:</span>
                                <span className="w-full font-bold dark:font-semibold">
                                    $56.97
                                </span>
                            </li>
                            <hr className="my-2 mx-2 dark:border-neutral-600/50" />
                            <li className="flex items-center justify-between">
                                <span className="w-full">
                                    {t("Total Before Tax")}:
                                </span>
                                <span className="w-full font-bold dark:font-semibold">
                                    $56.97
                                </span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="w-full">
                                    {t("Estimated Tax")}:
                                </span>
                                <span className="w-full font-bold dark:font-semibold">
                                    $56.97
                                </span>
                            </li>
                            <hr className="my-2 mx-2 dark:border-neutral-600/50" />
                            <li className="flex items-center justify-between">
                                <span className="w-full">
                                    {t("Order Total")}:
                                </span>
                                <span className="w-full font-bold text-indigo-600 dark:text-indigo-400">
                                    $56.97
                                </span>
                            </li>
                            <Button
                                theme="primary"
                                className="font-semibold mt-3"
                            >
                                {t("Place Order")}
                            </Button>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
}
