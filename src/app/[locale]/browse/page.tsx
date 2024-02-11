import IconInput from "@/components/IconInput";
import Toggle from "@/components/Toggle";
import {
    CurrencyDollarIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { CircleStackIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PriceFilters from "./components/PriceFilters";
import SortFilters from "./components/SortFilters";

export default function Browse() {
    return (
        <div className="mt-4">
            <IconInput
                icon={
                    <MagnifyingGlassCircleIcon className="h-6 w-6 me-3 opacity-50" />
                }
                label="Browse"
                type="number"
                placeholder="Expensive watch for a wedding"
            />
            <SortFilters />
            <PriceFilters
                strings={{ price_filters: "Price Filters", to: "to" }}
            />
        </div>
    );
}
