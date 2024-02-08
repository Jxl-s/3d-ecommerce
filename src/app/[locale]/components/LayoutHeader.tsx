import { useTranslations } from "next-intl";

interface Props {
    name: string;
}

export default function LayoutHeader({ name }: Props) {
    const t = useTranslations("Header");

    return (
        <>
            <div className="col-span-1 md:hidden" />
            <div className="col-span-4 md:col-span-5 text-center md:text-start">
                <h1 className="text-2xl md:text-5xl font-semibold">
                    <span>VirtuMarket</span>
                    <span className="hidden md:inline">{" - "}</span>
                    <span className="hidden md:inline">{name}</span>
                </h1>
                <p className="text-black/25 hidden md:block">{t("subtitle")}</p>
            </div>
        </>
    );
}
