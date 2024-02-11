interface Props {
    className?: string;
    range: [number, number];
    values: number[];
    label?: string;
    onChange?: (values: number[]) => void;
    onClick?: (value: number) => void;
    disabled?: boolean;
}

export default function MultiNumberSelect({
    className,
    range,
    label,
    values,
    onChange,
    onClick,
    disabled,
}: Props) {
    return (
        <div className={className}>
            {label && <span className="opacity-50 text-sm block">{label}</span>}
            <div
                className={`flex items-center justify-start gap-1 duration-300 ${
                    disabled && "opacity-50"
                } ${label && "mt-1"}`}
            >
                {Array.from(
                    { length: range[1] - range[0] + 1 },
                    (_, i) => i + range[0]
                ).map((i) => (
                    <div
                        key={i}
                        className={`w-10 h-10 duration-300 ${
                            values.includes(i)
                                ? "bg-indigo-600 text-white"
                                : "bg-white dark:bg-neutral-900"
                        } rounded-lg flex items-center justify-center shadow-md ${
                            disabled ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                        onClick={() => {
                            if (disabled) return;

                            // if there's onClick, it means it's a controlled component
                            if (onClick) return onClick(i);

                            // Create new array of values
                            let newValues = [...values];
                            if (values.includes(i)) {
                                newValues = newValues.filter((v) => v !== i);
                            } else {
                                newValues.push(i);
                            }

                            // Update it
                            onChange?.(newValues);
                        }}
                    >
                        <span className="text-sm font-medium">{i}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
