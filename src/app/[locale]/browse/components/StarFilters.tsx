"use client";

import MultiNumberSelect from "@/components/interactive/MultiNumberSelect";
import Toggle from "@/components/interactive/Toggle";
import { useBrowseStore } from "@/stores/browseStore";

interface Props {
    className?: string;
}

export default function StarFilters({ className }: Props) {
    const useStarFilters = useBrowseStore((state) => state.useStarFilters);
    const setUseStarFilters = useBrowseStore(
        (state) => state.setUseStarFilters
    );

    const starFilters = useBrowseStore((state) => state.starFilters);
    const setStarFilters = useBrowseStore((state) => state.setStarFilters);

    return (
        <div className={className}>
            <Toggle
                label="Star filters"
                value={useStarFilters}
                onChange={setUseStarFilters}
            />
            <MultiNumberSelect
                disabled={!useStarFilters}
                values={starFilters}
                className="mt-2"
                range={[1, 5]}
                onChange={setStarFilters}
            />
        </div>
    );
}
