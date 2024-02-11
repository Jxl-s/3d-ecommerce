"use client";

interface Props {
    icon: React.ReactNode;
    type: "text" | "number";
    placeholder: string;
    label?: string;
    className?: string;
    disabled?: boolean;
}

export default function IconInput({
    icon,
    type,
    placeholder,
    label,
    className,
    disabled
}: Props) {
    return (
        <div className={className}>
            {label && <span className="opacity-50 text-sm block">{label}</span>}
            <div className={`duration-300 w-full h-10 drop-shadow-lg bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-start px-2 ${label && "mt-1"} ${disabled && 'opacity-25'}`}>
                <div className="h-full flex items-center justify-center">{icon}</div>
                <input
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    className="text-sm outline-none w-full disabled:cursor-not-allowed bg-inherit"
                />
            </div>
        </div>
    );
}
