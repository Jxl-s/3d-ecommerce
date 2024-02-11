"use client";

import ListBox from "@/components/interactive/ListBox";
import { SortBy, SortOrder, useBrowseStore } from "@/stores/browseStore";

interface Props {
    className?: string;
    strings: {
        sort_by: string;
        sort_order: string;
    }
    sortByList: { display: string; value: SortBy }[];
    sortOrderList: { display: string; value: SortOrder }[];
}

export default function SortFilters({ className, strings, sortByList, sortOrderList }: Props) {
    const sortBy = useBrowseStore((state) => state.sortBy);
    const setSortBy = useBrowseStore((state) => state.setSortBy);

    const sortOrder = useBrowseStore((state) => state.sortOrder);
    const setSortOrder = useBrowseStore((state) => state.setSortOrder);

    return (
        <div className={`grid grid-cols-2 gap-2 mt-2 ${className}`}>
            <ListBox
                label={strings.sort_by}
                list={sortByList}
                onChange={({ value }) => setSortBy(value)}
                selected={sortByList.find((obj) => obj.value === sortBy)!}
            />
            <ListBox
                label={strings.sort_order}
                list={sortOrderList}
                onChange={({ value }) => setSortOrder(value)}
                selected={sortOrderList.find((obj) => obj.value === sortOrder)!}
            />
        </div>
    );
}
