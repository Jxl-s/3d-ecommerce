import { LoadingSvg } from "@/svgs";

const colors = {
    primary: {
        bg: "bg-indigo-600 hover:bg-indigo-600/80 border-indigo-600/80 active:bg-indigo-700",
    },
    danger: {
        bg: "bg-red-500 hover:bg-red-500/80 border-red-500/80 active:bg-red-600",
    },
};

const getColorClass = (color: keyof typeof colors) => {
    const colorTheme = colors[color];
    return `${colorTheme.bg}`;
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme: keyof typeof colors;
    loading?: boolean;
}

export default function Button({
    // Essential props
    theme,
    className,
    onClick,

    // Animating
    loading,

    ...props
}: Props) {
    const colorClass = getColorClass(theme);
    return (
        <button
            {...props}
            className={`
                w-full h-10 rounded-lg text-white drop-shadow-lg duration-300 disabled:cursor-not-allowed disabled:opacity-50 items-center justify-center flex ${colorClass} ${className}
            `}
            disabled={props.disabled || loading}
            onClick={onClick}
        >
            {loading ? <LoadingSvg /> : props.children}
        </button>
    );
}
