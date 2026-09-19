import DiscordEmbed from "@components/Layout/DiscordEmbed";
import IconsView from "@views/Icons";

export const metadata = {
    title: "Icons",
};

export default function IconsPage() {
    return (
        <>
            <DiscordEmbed page="icons" />
            <IconsView />
        </>
    );
}
