import DiscordEmbed from "@components/Layout/DiscordEmbed";
import DownloadView from "@views/Download";

export const metadata = {
    title: "Download",
};

export default function DownloadPage() {
    return (
        <>
            <DiscordEmbed page="download" />
            <DownloadView />
        </>
    );
}
