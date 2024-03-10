"use client";

type InputTypeValue = {
    text: string;
    number: number;
}

interface Props<T extends keyof InputTypeValue> {
    icon: React.ReactNode;
    type: T;
    placeholder: string;
    value?: InputTypeValue[T];
    label?: string;
    height?: number;
    className?: string;
    disabled?: boolean;
    onChange?: (text: InputTypeValue[T]) => void;

    inputAttr?: React.InputHTMLAttributes<HTMLInputElement>;
}

// todo: clean up so many props
export default function InputWithIcon<T extends keyof InputTypeValue>({
    icon,
    type,
    value,
    placeholder,
    label,
    className,
    height,
    disabled,
    onChange,

    inputAttr
}: Props<T>) {
    return (
        <div className={className}>
            {label && <span className="opacity-50 text-sm block">{label}</span>}
            <div
                className={`duration-300 w-full h-${height ?? 10} drop-shadow-md bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-start px-2 ${
                    label && "mt-1"
                } ${disabled && "opacity-25"}`}
            >
                <div className="h-full flex items-center justify-center">
                    {icon}
                </div>
                <input
                    {...inputAttr}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value as InputTypeValue[T])}
                    className={`text-sm outline-none w-full disabled:cursor-not-allowed bg-inherit ${inputAttr?.className}`}
                />
            </div>
        </div>
    );
}
