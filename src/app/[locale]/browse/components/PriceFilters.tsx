"use client";

import InputWithIcon from "@/components/interactive/InputWithIcon";
import Toggle from "@/components/interactive/Toggle";
import { useBrowseStore } from "@/stores/browseStore";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

interface Props {
    strings: {
        price_filters: string;
        to: string;
    };
    className?: string;
}

export default function PriceFilters({ strings, className }: Props) {
    const usePriceFilters = useBrowseStore((state) => state.usePriceFilters);
    const setUsePriceFilters = useBrowseStore(
        (state) => state.setUsePriceFilters
    );

    const priceFilters = useBrowseStore((state) => state.priceFilters);
    const setPriceFilters = useBrowseStore((state) => state.setPriceFilters);

    return (
        <div className={className}>
            <Toggle
                label={strings.price_filters}
                value={usePriceFilters}
                onChange={(value) => setUsePriceFilters(value)}
            />
            <div className="flex gap-3 mt-1 items-center">
                <InputWithIcon
                    className="flex-grow"
                    disabled={!usePriceFilters}
                    type="number"
                    placeholder="0"
                    icon={
                        <CurrencyDollarIcon className="h-6 w-6 me-3 opacity-50" />
                    }
                    value={priceFilters.from}
                    onChange={(value) => {
                        setPriceFilters(parseFloat(value), priceFilters.to);
                    }}
                />
                <span className="opacity-50">{strings.to}</span>
                <InputWithIcon
                    className="flex-grow"
                    disabled={!usePriceFilters}
                    type="number"
                    placeholder="0"
                    icon={
                        <CurrencyDollarIcon className="h-6 w-6 me-3 opacity-50" />
                    }
                    value={priceFilters.to}
                    onChange={(value) => {
                        setPriceFilters(priceFilters.from, parseFloat(value));
                    }}
                />
            </div>
        </div>
    );
}
