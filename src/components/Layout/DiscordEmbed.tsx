import { Urls } from "@constants";

export default function DiscordEmbed({
    page,
    query,
}: {
    page?: string;
    query?: Record<string, string>;
}) {
    const search = new URLSearchParams({
        ...(page && { page }),
        ...query,
    }).toString();

    return (
        <link
            rel="discord:component-embed"
            type="application/json"
            href={`${Urls.SITE_URL}/embed.json${search && `?${search}`}`}
        />
    );
}
