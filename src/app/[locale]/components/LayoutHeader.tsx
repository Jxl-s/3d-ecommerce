import LayoutCartButton from "./LayoutCartButton";
import { useTranslations } from "next-intl";

interface Props {
    name: string;
}

export default function LayoutHeader({ name }: Props) {
    const t = useTranslations("Header");

    return (
        <>
            <header className="grid grid-cols-6 items-center md:items-start justify-between">
                <div className="col-span-1 md:hidden" />
                <div className="col-span-4 md:col-span-5 text-center md:text-start">
                    <h1 className="text-2xl md:text-5xl font-semibold dark:text-white">
                        <span>VirtuMarket</span>
                        <span className="hidden md:inline">{" - "}</span>
                        <span className="hidden md:inline">{name}</span>
                    </h1>
                    <p className="text-black/25 hidden md:block dark:text-white/25">
                        {t("subtitle")}
                    </p>
                </div>
                <LayoutCartButton content={t("Cart")} />
            </header>
        </>
    );
}
