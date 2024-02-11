"use client";

import IconInput from "@/components/IconInput";
import Toggle from "@/components/Toggle";
import { useBrowseStore } from "@/stores/browseStore";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

interface Props {
    strings: {
        price_filters: string;
        to: string;
    };
}

export default function PriceFilters({ strings }: Props) {
    const usePriceFilters = useBrowseStore((state) => state.usePriceFilters);
    const setUsePriceFilters = useBrowseStore((state) => state.setUsePriceFilters);

    return (
        <>
            <Toggle
                label={strings.price_filters}
                value={usePriceFilters}
                onChange={(value) => setUsePriceFilters(value)}
            />
            <div className="flex gap-3 mt-1 items-center">
                <IconInput
                    className="flex-grow"
                    disabled={!usePriceFilters}
                    type="number"
                    placeholder="0"
                    icon={
                        <CurrencyDollarIcon className="h-6 w-6 me-3 opacity-50" />
                    }
                />
                <span className="opacity-50">{strings.to}</span>
                <IconInput
                    className="flex-grow"
                    disabled={!usePriceFilters}
                    type="number"
                    placeholder="0"
                    icon={
                        <CurrencyDollarIcon className="h-6 w-6 me-3 opacity-50" />
                    }
                />
            </div>
        </>
    );
}
