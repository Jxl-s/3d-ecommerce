import InputWithIcon from "@/components/interactive/InputWithIcon";
import Toggle from "@/components/interactive/Toggle";
import {
    CurrencyDollarIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { CircleStackIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PriceFilters from "./components/PriceFilters";
import SortFilters from "./components/SortFilters";
import StarFilters from "./components/StarFilters";
import { useTranslations } from "next-intl";
import { SortBy, SortOrder } from "@/stores/browseStore";
import SearchInput from "./components/SearchInput";

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
        </div>
    );
}
