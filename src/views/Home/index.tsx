import { Meta, Title } from "@solidjs/meta"
import HomeContent from "./components/Content"
import Comparison from "./components/Content/Comparison"
import HomeHero from "./components/Hero"

export default function Home() {
    return (
        <>
            <Title>Vencord Alternative | Equicord</Title>
            <Meta
                name="description"
                content="Equicord is a Vencord alternative and enhanced fork with extra plugins, cloud sync, active maintenance, and more."
            />
            <Meta property="og:type" content="website" />
            <Meta property="og:url" content="https://vencord.org/" />
            <Meta
                property="og:title"
                content="Vencord Alternative | Equicord"
            />
            <Meta
                property="og:description"
                content="Equicord is a Vencord alternative and enhanced fork with extra plugins, cloud sync, active maintenance, and more."
            />
            <Meta
                property="og:image"
                content="https://vencord.org/assets/opengraph.webp"
            />
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:url" content="https://vencord.org/" />
            <Meta
                name="twitter:title"
                content="Vencord Alternative | Equicord"
            />
            <Meta
                name="twitter:description"
                content="Equicord is a Vencord alternative and enhanced fork with extra plugins, cloud sync, active maintenance, and more."
            />
            <Meta
                name="twitter:image"
                content="https://vencord.org/assets/opengraph.webp"
            />
            <HomeHero />
            <div class="px-6 pb-24">
                <div class="max-w-eq-lg mx-auto">
                    <Comparison />
                </div>
            </div>
            <HomeContent />
        </>
    )
}
