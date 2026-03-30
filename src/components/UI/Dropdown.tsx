import { ChevronDown, ChevronUp } from "lucide-solid"
import { For, type JSX, Show, createSignal, onCleanup, onMount } from "solid-js"

export interface DropdownItem<T extends string | number = string> {
    label: string
    value: T
    icon?: JSX.Element
}

interface Props<T extends string | number = string> {
    icon?: JSX.Element
    items: DropdownItem<T>[]
    placeholder?: string
    selected?: DropdownItem<T> | null
    onSelect?: (item: DropdownItem<T>) => void
}

export default function Dropdown<T extends string | number = string>(
    props: Props<T>,
) {
    const [open, setOpen] = createSignal(false)
    let containerRef: HTMLDivElement | undefined

    const toggle = () => setOpen((open) => !open)
    const close = () => setOpen(false)

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef && !containerRef.contains(event.target as Node)) {
            close()
        }
    }

    const handleSelect = (item: DropdownItem<T>) => {
        props.onSelect?.(item)
        close()
    }

    onMount(() => {
        document.addEventListener("click", handleClickOutside)
    })

    onCleanup(() => {
        document.removeEventListener("click", handleClickOutside)
    })

    return (
        <div ref={containerRef} class="relative w-full">
            <button
                onClick={toggle}
                aria-haspopup="listbox"
                aria-expanded={open()}
                class={`flex w-full cursor-pointer items-center justify-between gap-1 rounded-lg border eq-border px-3 py-3 font-medium transition-colors eq-hover-surface focus-visible:outline-none focus-visible:ring-2 eq-focus-ring-soft ${open() ? "eq-surface eq-page-text" : "eq-page-bg eq-text-muted"}`}
            >
                <div class="flex flex-1 justify-between items-center gap-1">
                    <span class="flex items-center gap-1">
                        <Show when={props.icon}>{props.icon}</Show>
                        {props.placeholder ?? "Select option"}
                    </span>

                    <Show when={props.selected}>
                        <span class="rounded eq-bg-accent-soft px-2 py-0.5 text-xs font-semibold eq-text-base">
                            {props.selected!.label}
                        </span>
                    </Show>
                </div>

                {open() ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Menu */}
            <Show when={open()}>
                <div
                    role="listbox"
                    class="absolute z-50 mt-2 flex w-full flex-col divide-y eq-border overflow-hidden rounded-lg border eq-surface shadow-lg"
                >
                    <For each={props.items}>
                        {(item) => (
                            <button
                                role="option"
                                aria-selected={
                                    props.selected?.value === item.value
                                }
                                class="flex w-full cursor-pointer items-center gap-2 px-3 py-3 font-medium eq-page-text transition-colors duration-150 eq-hover-surface-2 focus-visible:outline-none"
                                onClick={() => handleSelect(item)}
                            >
                                <Show when={item.icon}>{item.icon}</Show>

                                {item.label}
                            </button>
                        )}
                    </For>
                </div>
            </Show>
        </div>
    )
}
