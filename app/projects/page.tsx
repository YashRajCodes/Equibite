import DiscordEmbed from "@components/Layout/DiscordEmbed";
import ProjectsView from "@views/Projects";

export const metadata = {
    title: "Projects",
};

export default function ProjectsPage() {
    return (
        <>
            <DiscordEmbed page="projects" />
            <ProjectsView />
        </>
    );
}
