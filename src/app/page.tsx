import Button from "@/components/Button";
import { HeroSvg } from "@/svgs";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <p className="mt-5 text-black/60 w-full md:w-3/4 text-center md:text-start mx-auto md:mx-0 text-md">
                Welcome to <b>VirtuMarket</b>! This is an eCommerce web
                application that featuers basic functionalities of such a
                system, but without real checkout (e.g. Stripe or Paypal).
                <br />
                <br />
                Source can be found on my GitHub {" "}
                <Link href={"https://github.com/Jxl-s/3d-ecommerce"} target="_blank" className="text-indigo-500">
                    here
                </Link>
                , and please check out my other projects as well.
            </p>
        </>
    );
}
