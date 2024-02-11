"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Props<T> {
    list: T[];

    selected?: T;
    onChange?: (value: T) => void;
    showAbove?: boolean;
}

export default function ListBox<T extends { display: string }>({
    list,
    selected,
    onChange,
    showAbove,
}: Props<T>) {
    const _selected = selected ?? list[0];
    return (
        <div className="w-full h-10 mt-1">
            <Listbox value={_selected} onChange={onChange}>
                <div className="relative mt-1 z-10 w-full h-full">
                    <Listbox.Button className="h-full relative w-full cursor-pointer rounded-lg bg-white dark:bg-neutral-900 py-2 pl-3 pr-10 text-left shadow-md text-sm">
                        <span className="block truncate font-medium">
                            {_selected.display}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className={`absolute ${
                                showAbove ? "bottom-full mb-1" : "mt-1"
                            } max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-900 py-1 shadow-lg ring-1 ring-black/5 text-sm`}
                        >
                            {list.map((obj, i) => (
                                <Listbox.Option
                                    key={i}
                                    className={({ active }) =>
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-indigo-100 text-indigo-500 dark:bg-indigo-900 dark:text-indigo-200"
                                                : "text-gray-900 dark:text-neutral-300"
                                        }`
                                    }
                                    value={obj}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {obj.display}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
