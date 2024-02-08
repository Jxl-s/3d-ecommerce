"use client";

import { useState } from "react";
import { Switch as _Switch_ } from "@headlessui/react";

interface Props {
    enabled?: boolean;
    onChange?: (enabled: boolean) => void;
}

export default function Switch({ enabled, onChange }: Props) {
    return (
        <_Switch_
            checked={enabled ?? false}
            onChange={onChange}
            className={`${
                enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full border border-neutral-500/10`}
        >
            <span
                className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition drop-shadow-lg shadow`}
            />
        </_Switch_>
    );
}
