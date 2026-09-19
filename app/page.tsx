import DiscordEmbed from "@components/Layout/DiscordEmbed";
import HomeContent from "@views/Home/components/Content";
import HomeHero from "@views/Home/components/Hero";

export default function Home() {
    return (
        <>
            <DiscordEmbed />
            <HomeHero />
            <HomeContent />
        </>
    );
}
