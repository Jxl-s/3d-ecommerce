"use client";

import MultiNumberSelect from "@/components/interactive/MultiNumberSelect";

export default function PageSelector() {
    const goToPage = (page: number) => {
        console.log("Go to page", page);
    };

    return (
        <div className="flex items-center justify-start">
            <MultiNumberSelect
                values={[]}
                className="mt-2"
                range={[1, 1]}
                onClick={goToPage}
            />
            <span className="mx-2">...</span>
            <MultiNumberSelect
                values={[8]}
                className="mt-2"
                range={[7, 9]}
                onClick={goToPage}
            />
            <span className="mx-2">...</span>
            <MultiNumberSelect
                values={[]}
                className="mt-2"
                range={[72, 72]}
                onClick={goToPage}
            />
        </div>
    );
}
