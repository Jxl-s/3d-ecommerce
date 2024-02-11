"use client";

import ListBox from "@/components/ListBox";
import { SortBy, useBrowseStore } from "@/stores/browseStore";

const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];

export default function SortFilters() {
    const sortBy = useBrowseStore((state) => state.sortBy);
    const setSortBy = useBrowseStore((state) => state.setSortBy);

    const list = [
        { display: "Name", value: SortBy.Name },
        { display: "Price", value: SortBy.Price },
        { display: "Rating", value: SortBy.Rating },
    ];

    return (
        <ListBox
            list={list}
            onChange={({ value }) => setSortBy(value)}
            selected={list.find((obj) => obj.value === sortBy)!}
        />
    );
}
