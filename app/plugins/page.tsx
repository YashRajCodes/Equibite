import DiscordEmbed from "@components/Layout/DiscordEmbed";
import PluginsView from "@views/Plugins";
import { Suspense } from "react";

export const metadata = {
    title: "Plugins",
};

export default function PluginsPage() {
    return (
        <>
            <DiscordEmbed page="plugins" />
            <Suspense>
                <PluginsView />
            </Suspense>
        </>
    );
}
