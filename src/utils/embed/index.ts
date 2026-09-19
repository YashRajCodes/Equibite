import type { EmbedComponent } from "./common";
import { defaultEmbed } from "./default";
import { downloadEmbed } from "./download";
import { getPageInfo, infoEmbed } from "./pages";
import { pluginEmbed, pluginsEmbed } from "./plugin";

export type { EmbedComponent };

export async function getEmbed(params: URLSearchParams): Promise<EmbedComponent> {
    const page = params.get("page");

    switch (page) {
        case "download":
            return downloadEmbed();
        case "plugins":
            return pluginsEmbed();
        case "plugin":
            return pluginEmbed(params.get("name"));
        default: {
            const info = getPageInfo(page);

            return info ? infoEmbed(info) : defaultEmbed();
        }
    }
}
