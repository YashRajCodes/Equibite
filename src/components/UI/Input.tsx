import { type JSX, splitProps } from "solid-js"

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {
    icon?: JSX.Element
}

export default function Input(props: Props) {
    const [local, rest] = splitProps(props, ["icon", "class"])

    return (
        <div class="eq-input-shell eq-ring-offset flex flex-1 items-center gap-2 rounded-xl border px-3 py-2 focus-within:ring-2">
            {local.icon && (
                <span class="flex-shrink-0 eq-text-muted">{local.icon}</span>
            )}

            <input
                {...rest}
                class={`eq-input-field w-full bg-transparent text-sm font-medium eq-page-text outline-none ${local.class ?? ""}`}
            />
        </div>
    )
}
