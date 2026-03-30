import { A } from "@solidjs/router"
import { createSignal, For, onMount } from "solid-js"

import { faApple, faLinux, faWindows } from "@fortawesome/free-brands-svg-icons"
import { Download } from "lucide-solid"
import Fa from "solid-fa"

import Button from "@components/UI/Button"
import { isLinux, isMac, isWindows } from "@utils/navigator"

export default function HomeHero() {
    const [mounted, setMounted] = createSignal(false)
    const headerWords = "An enhanced version of Vencord".split(" ")

    const getPlatform = () => {
        if (isWindows()) {
            return {
                label: "Download for Windows",
                href: "https://equicord.org/download?platform=windows",
                icon: <Fa icon={faWindows} class="!size-4" />,
            }
        }

        if (isMac()) {
            return {
                label: "Download for macOS",
                href: "https://equicord.org/download?platform=macos",
                icon: <Fa icon={faApple} class="!size-4" />,
            }
        }

        if (isLinux()) {
            return {
                label: "Download for Linux",
                href: "https://equicord.org/download?platform=linux",
                icon: <Fa icon={faLinux} class="!size-4" />,
            }
        }

        return {
            label: "Download",
            href: "https://equicord.org/download",
            icon: <Download size="16" />,
        }
    }

    const platform = getPlatform()

    onMount(() => {
        requestAnimationFrame(() => setMounted(true))
    })

    return (
        <div class="min-h-[82vh] max-w-eq-lg mx-auto flex flex-col items-center justify-center px-6 py-16">
            <div class="flex max-w-[720px] flex-col items-center justify-center gap-4 text-center">
                <h1 class="text-4xl font-bold eq-page-text lg:text-7xl lg:leading-18">
                    <For each={headerWords}>
                        {(word, index) => (
                            <span
                                class="mr-2 inline-block transition-all duration-700 ease-out"
                                classList={{
                                    "opacity-0 translate-y-10 blur-sm":
                                        !mounted(),
                                    "opacity-100 translate-y-0 blur-0":
                                        mounted(),
                                }}
                                style={{
                                    "transition-delay": `${index() * 100}ms`,
                                }}
                            >
                                {word}
                            </span>
                        )}
                    </For>
                </h1>

                <p
                    class="text-lg font-semibold eq-text-muted transition-all duration-700 ease-out"
                    classList={{
                        "opacity-0 translate-y-10 blur-sm": !mounted(),
                        "opacity-100 translate-y-0 blur-0": mounted(),
                    }}
                    style={{ "transition-delay": "400ms" }}
                >
                    A Vencord alternative with extra plugins, cloud sync, and
                    active maintenance.
                </p>
                <p
                    class="text-xs font-semibold eq-text-muted-soft transition-all duration-700 ease-out"
                    classList={{
                        "opacity-0 translate-y-10 blur-sm": !mounted(),
                        "opacity-100 translate-y-0 blur-0": mounted(),
                    }}
                    style={{ "transition-delay": "400ms" }}
                >
                    Compare Vencord and Equicord below.
                </p>

                <div
                    class="mt-6 flex flex-col items-center gap-3 transition-all duration-700 ease-out"
                    classList={{
                        "opacity-0 translate-y-10 blur-sm": !mounted(),
                        "opacity-100 translate-y-0 blur-0": mounted(),
                    }}
                    style={{ "transition-delay": "600ms" }}
                >
                    <A href={platform.href}>
                        <Button variant="primary" icon={platform.icon}>
                            {platform.label}
                        </Button>
                    </A>

                    <span class="inline-flex items-center gap-1 text-xs font-bold eq-text-muted">
                        Available on <Fa icon={faWindows} /> Windows,{" "}
                        <Fa icon={faApple} /> macOS and <Fa icon={faLinux} />{" "}
                        Linux.
                    </span>
                </div>
            </div>
        </div>
    )
}
