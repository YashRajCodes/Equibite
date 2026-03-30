import Button from "@components/UI/Button"
import { A } from "@solidjs/router"
import { CloudCheck, CloudDownload, CloudFog, Monitor } from "lucide-solid"

function Cloud() {
    return (
        <div class="flex flex-col items-center gap-12">
            <div class="eq-surface relative flex items-center gap-2 rounded-full px-3 py-2 font-medium eq-text-accent-soft">
                <CloudDownload size={16} />
                Cloud
                <div class="absolute top-4 right-0 -z-10 h-24 w-0.5 -rotate-45 eq-surface" />
                <div class="absolute top-4 left-0 -z-10 h-24 w-0.5 rotate-45 eq-surface" />
            </div>

            <div class="flex gap-24">
                <span class="eq-surface flex items-center gap-2 rounded-full px-3 py-2 font-medium eq-page-text">
                    <Monitor class="eq-text-muted" size={16} />
                    Device
                </span>

                <span class="eq-surface flex items-center gap-2 rounded-full px-3 py-2 font-medium eq-page-text">
                    <Monitor class="eq-text-muted" size={16} />
                    Device
                </span>
            </div>
        </div>
    )
}

export default function FeatureCloud() {
    return (
        <div class="relative flex justify-between gap-6 max-md:flex-col">
            <div class="eq-surface flex w-full flex-col gap-6 rounded-xl px-8 py-12 md:w-2/3 md:justify-between">
                <div class="flex flex-col gap-2">
                    <span class="flex items-center gap-2 text-xl font-semibold">
                        <CloudCheck class="eq-text-accent-soft" size={24} />
                        Cloud based
                    </span>

                    <p class="font-medium eq-text-muted">
                        Sync your settings anytime with our dedicated Equicord
                        cloud instance for seamless experience across devices.
                    </p>

                    <A href="/cloud" class="mt-6 w-fit">
                        <Button
                            variant="secondary"
                            icon={<CloudFog size={16} />}
                        >
                            Read more
                        </Button>
                    </A>
                </div>
            </div>

            <div class="flex w-full items-center justify-center py-6 max-md:px-8 max-sm:gap-3">
                <Cloud />
            </div>
        </div>
    )
}
