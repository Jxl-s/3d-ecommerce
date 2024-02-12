import PriceFilters from "./components/PriceFilters";
import SortFilters from "./components/SortFilters";
import StarFilters from "./components/StarFilters";
import { useTranslations } from "next-intl";
import { SortBy, SortOrder } from "@/stores/browseStore";
import SearchInput from "./components/SearchInput";
import PageSelector from "./components/PageSelector";
import Product from "@/components/Product";

export default function Browse() {
    const t = useTranslations("Browse");

    return (
        <div className="mt-4">
            <SearchInput
                strings={{
                    browse: t("Browse"),
                    search_placeholder: t("search_placeholder"),
                }}
            />
            <div className="grid grid-cols-3 items-center gap-2">
                <SortFilters
                    className="col-span-3 xl:col-span-1"
                    strings={{
                        sort_by: t("Sort By"),
                        sort_order: t("Sort Order"),
                    }}
                    sortByList={[
                        { display: t("Sort.Name"), value: SortBy.Name },
                        { display: t("Sort.Price"), value: SortBy.Price },
                        { display: t("Sort.Rating"), value: SortBy.Rating },
                    ]}
                    sortOrderList={[
                        { display: t("Sort.Ascending"), value: SortOrder.Asc },
                        {
                            display: t("Sort.Descending"),
                            value: SortOrder.Desc,
                        },
                    ]}
                />
                <StarFilters
                    className="col-span-3 xl:col-span-1 mx-0 xl:mx-auto"
                    strings={{
                        star_filters: t("Star Filters"),
                    }}
                />
                <PriceFilters
                    className="col-span-3 xl:col-span-1"
                    strings={{ price_filters: t("Price Filters"), to: t("To") }}
                />
            </div>
            <hr className="mt-4 border-black/10 dark:border-neutral-600" />
            <div className="mt-4">
                <h1 className="w-full text-xl font-semibold">
                    Results (Showing 10 of 50)
                </h1>
                <PageSelector />
                {/* Show results now */}
                <div className="mt-2 grid grid-cols-4 gap-2">
                    <Product
                        creator="John Doe"
                        description="Cool chair, I think that you can sit on it instead of standing"
                        image="/images/chair.png"
                        name="Chair for two"
                        price={100}
                        ratingCount={100}
                        stars={3}
                        className="col-span-4 xl:col-span-1"
                    />
                    <Product
                        creator="John Doe"
                        description="Cool chair, I think that you can"
                        image="/images/chair.png"
                        name="Chair for two"
                        price={100}
                        ratingCount={100}
                        stars={3}
                        className="col-span-4 xl:col-span-1"
                    />
                    <Product
                        creator="John Doe"
                        description="Cool chair, I think that you can"
                        image="/images/chair.png"
                        name="Chair for two"
                        price={100}
                        ratingCount={100}
                        stars={3}
                        className="col-span-4 xl:col-span-1"
                    />
                    <Product
                        creator="John Doe"
                        description="Cool chair, I think that you can"
                        image="/images/chair.png"
                        name="Chair for two"
                        price={100}
                        ratingCount={100}
                        stars={3}
                        className="col-span-4 xl:col-span-1"
                    />
                </div>
            </div>
        </div>
    );
}
