import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import { Pathnames } from "next-intl/navigation";

const locales = ["en", "fr"] as const;
const pathnames = {
    "/": "/",
    "/pathnames": {
        en: "/pathnames",
        fr: "/pathnames",
    },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames,
    });
