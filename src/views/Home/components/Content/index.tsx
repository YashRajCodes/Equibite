import FeatureCloud from "./Cloud"
import Community from "./Community"
import Contribute from "./Contribute"
import FeatureMaintained from "./Maintained"
import FeaturePlugins from "./Plugins"
import Policy from "./Policy"

export default function HomeContent() {
    return (
        <div class="max-w-eq-lg mx-auto px-6">
            <h2 class="pb-16 text-center text-4xl font-bold eq-page-text sm:text-5xl">
                What makes Equicord different?
            </h2>

            <div class="flex flex-col">
                <div class="flex flex-col gap-12 pb-24">
                    <FeatureMaintained />
                    <FeaturePlugins />
                    <FeatureCloud />
                </div>

                <h2 class="py-20 text-center text-4xl font-bold eq-page-text sm:text-5xl">
                    and more!
                </h2>

                <div class="flex justify-between gap-6 max-md:flex-col">
                    <Community />
                    <Contribute />
                    <Policy />
                </div>
            </div>
        </div>
    )
}
