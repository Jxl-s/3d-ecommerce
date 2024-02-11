"use client";

import ListBox from "@/components/interactive/ListBox";
import { SortBy, SortOrder, useBrowseStore } from "@/stores/browseStore";

interface Props {
    className?: string;
}

export default function SortFilters({ className }: Props) {
    const sortBy = useBrowseStore((state) => state.sortBy);
    const setSortBy = useBrowseStore((state) => state.setSortBy);

    const sortOrder = useBrowseStore((state) => state.sortOrder);
    const setSortOrder = useBrowseStore((state) => state.setSortOrder);

    const sortByList = [
        { display: "Name", value: SortBy.Name },
        { display: "Price", value: SortBy.Price },
        { display: "Rating", value: SortBy.Rating },
    ];

    const sortOrderList = [
        { display: "Ascending", value: SortOrder.Asc },
        { display: "Descending", value: SortOrder.Desc },
    ];

    return (
        <div className={`grid grid-cols-2 gap-2 mt-2 ${className}`}>
            <ListBox
                label="Sort By"
                list={sortByList}
                onChange={({ value }) => setSortBy(value)}
                selected={sortByList.find((obj) => obj.value === sortBy)!}
            />
            <ListBox
                label="Sort Order"
                list={sortOrderList}
                onChange={({ value }) => setSortOrder(value)}
                selected={sortOrderList.find((obj) => obj.value === sortOrder)!}
            />
        </div>
    );
}
