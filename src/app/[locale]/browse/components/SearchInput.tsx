"use client";

import InputWithIcon from "@/components/interactive/InputWithIcon";
import { useBrowseStore } from "@/stores/browseStore";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

interface Props {
    strings: {
        browse: string;
        search_placeholder: string;
    };
}

export default function SearchInput({ strings }: Props) {
    const searchQuery = useBrowseStore((state) => state.searchQuery);
    const setSearchQuery = useBrowseStore((state) => state.setSearchQuery);

    return (
        <InputWithIcon
            icon={
                <MagnifyingGlassCircleIcon className="h-6 w-6 me-3 opacity-50" />
            }
            label={strings.browse}
            type="text"
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={strings.search_placeholder}
        />
    );
}
