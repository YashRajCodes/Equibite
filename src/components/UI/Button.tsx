import classNames from "classnames"
import { type JSX, splitProps } from "solid-js"

export type ButtonVariant = "primary" | "secondary" | "blue" | "red"

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant
    icon?: JSX.Element
}

export default function Button(props: Props) {
    const [local, rest] = splitProps(props, [
        "variant",
        "class",
        "icon",
        "children",
    ])

    return (
        <button
            {...rest}
            class={classNames(
                "eq-ring-offset flex items-center justify-center gap-1 rounded-xl border px-6 py-3 font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 enabled:cursor-pointer active:enabled:scale-[.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                local.class,
                {
                    "eq-btn-primary": local.variant === "primary",
                    "eq-btn-secondary": local.variant === "secondary",
                    "eq-btn-blue": local.variant === "blue",
                    "eq-btn-red": local.variant === "red",
                },
            )}
        >
            {local.icon && <span class="flex-shrink-0">{local.icon}</span>}
            {local.children}
        </button>
    )
}
