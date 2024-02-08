import { useTranslations } from "next-intl";
import Link from "next/link";

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
        </>
    );
}
