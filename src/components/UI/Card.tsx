import classNames from "classnames"
import type { LucideProps } from "lucide-solid"
import type { Component } from "solid-js"

interface Props {
    customClass?: string
    icon: Component<LucideProps>
    title: string
    excerpt: string
}

export default function Card({
    customClass,
    icon: Icon,
    title,
    excerpt,
}: Props) {
    return (
        <div
            class={classNames(
                customClass,
                "eq-surface flex w-full flex-col gap-2 rounded-2xl border eq-border p-6",
            )}
        >
            <div class="flex items-center gap-3">
                <span class="flex items-center gap-2 text-xl font-bold eq-page-text">
                    <Icon size="18" fill="currentColor" />
                    {title}
                </span>
            </div>
            <p class="text-sm font-medium eq-text-muted">{excerpt}</p>
        </div>
    )
}
