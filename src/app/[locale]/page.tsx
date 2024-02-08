import {} from "next-intl";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Index() {
    // Redirect to the proper locale
    const cookieStore = cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";

    return redirect(`/${locale}/home`);
}
