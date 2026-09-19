import DiscordEmbed from "@components/Layout/DiscordEmbed";
import CloudPolicyView from "@views/Cloud/Policy";

export const metadata = {
    title: "Cloud Privacy Policy",
};

export default function CloudPolicyPage() {
    return (
        <>
            <DiscordEmbed page="cloud-policy" />
            <CloudPolicyView />
        </>
    );
}
