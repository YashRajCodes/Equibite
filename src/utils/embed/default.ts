import { Urls } from "@constants";

import { actionRow, container, linkButton, separator, siteHeader } from "./common";

export function defaultEmbed() {
    return container([
        siteHeader(
            "# Equicord\nA fork that offers a wider selection of plugins from the community. The unstable fork of Vencord.",
        ),
        separator(1),
        actionRow([
            linkButton("Download", `${Urls.SITE_URL}/download`),
            linkButton("Plugins", `${Urls.SITE_URL}/plugins`),
            linkButton("Discord", `${Urls.SITE_URL}${Urls.DISCORD_URL}`),
            linkButton("GitHub", "https://github.com/Equicord/Equicord"),
        ]),
    ]);
}
