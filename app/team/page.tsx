import DiscordEmbed from "@components/Layout/DiscordEmbed";
import TeamView from "@views/Team";

export const metadata = {
    title: "Team",
};

export default function TeamPage() {
    return (
        <>
            <DiscordEmbed page="team" />
            <TeamView />
        </>
    );
}
