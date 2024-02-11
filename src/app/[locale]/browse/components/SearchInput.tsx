"use client";

import InputWithIcon from "@/components/interactive/InputWithIcon";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

interface Props {
    strings: {
        browse: string;
        search_placeholder: string;
    };
}

export default function SearchInput({ strings }: Props) {
    return (
        <InputWithIcon
            icon={
                <MagnifyingGlassCircleIcon className="h-6 w-6 me-3 opacity-50" />
            }
            label={strings.browse}
            type="text"
            placeholder={strings.search_placeholder}
        />
    );
}
