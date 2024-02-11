"use client";

interface Props {
    label: string;
    value: boolean;
    className?: string;
    onChange?: (value: boolean) => void;
}

export default function Toggle({ label, className, onChange, value }: Props) {
    return (
        <div
            className={
                "flex items-center justify-start gap-2 mt-2 " + className
            }
        >
            <span
                className={`w-3.5 h-3.5 rounded-full block duration-300 drop-shadow cursor-pointer ${
                    value ? "bg-indigo-400 dark:bg-indigo-600" : "bg-neutral-400 dark:bg-neutral-600"
                }`}
                onClick={() => onChange?.(!value)}
            />
            <span
                className="opacity-50 text-sm block cursor-pointer"
                onClick={() => onChange?.(!value)}
            >
                {label}
            </span>
        </div>
    );
}
