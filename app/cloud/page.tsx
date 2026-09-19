import DiscordEmbed from "@components/Layout/DiscordEmbed";
import CloudView from "@views/Cloud";

export const metadata = {
    title: "Cloud",
};

export default function CloudPage() {
    return (
        <>
            <DiscordEmbed page="cloud" />
            <CloudView />
        </>
    );
}
