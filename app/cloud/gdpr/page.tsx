import DiscordEmbed from "@components/Layout/DiscordEmbed";
import CloudGDPRView from "@views/Cloud/GDPR";

export const metadata = {
    title: "Cloud GDPR Policy",
};

export default function CloudGDPRPage() {
    return (
        <>
            <DiscordEmbed page="cloud-gdpr" />
            <CloudGDPRView />
        </>
    );
}
