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

export default function Browse() {
    return (
        <div className="mt-4">
            <InputWithIcon
                icon={
                    <MagnifyingGlassCircleIcon className="h-6 w-6 me-3 opacity-50" />
                }
                label="Browse"
                type="text"
                placeholder="Expensive watch for a wedding"
            />
            <div className="grid grid-cols-3 items-center gap-2">
                <SortFilters className="col-span-3 xl:col-span-1" />
                <StarFilters className="col-span-3 xl:col-span-1 mx-0 xl:mx-auto" />
                <PriceFilters
                    className="col-span-3 xl:col-span-1"
                    strings={{ price_filters: "Price Filters", to: "to" }}
                />
            </div>
        </div>
    );
}
