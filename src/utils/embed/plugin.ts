import { Urls } from "@constants";
import { fetchPlugins, formatAuthors, getAvailabilityText, type Plugin } from "@utils/plugin";

import {
    actionRow,
    container,
    DEFAULT_ACCENT,
    linkButton,
    section,
    separator,
    text,
    thumbnail,
} from "./common";
import { defaultEmbed } from "./default";
import { infoEmbed } from "./pages";

const getPluginSource = ({ filePath, isModified }: Plugin) => {
    const lower = filePath.toLowerCase();

    if (isModified) return { name: "Modified", icon: "/assets/icons/equicord/modified.webp", color: 0xA175FF };
    if (lower.startsWith("src/equicordplugins")) return { name: "Equicord", icon: "/assets/icons/equicord/icon.png", color: 0x2197FF };
    if (lower.startsWith("src/plugins")) return { name: "Vencord", icon: "/assets/icons/vencord/icon.webp", color: 0xDD7878 };

    return { name: "Unknown", icon: "/assets/icons/misc/userplugin.webp", color: DEFAULT_ACCENT };
};

export async function pluginsEmbed() {
    const plugins = await fetchPlugins("all").catch(() => null);

    return infoEmbed({
        title: "Equicord Plugins",
        description: plugins
            ? `Browse our list of ${plugins.length} plugins.`
            : "Browse our list of plugins.",
    });
}

export async function pluginEmbed(name: string | null) {
    if (!name) return pluginsEmbed();

    const plugins = await fetchPlugins("all").catch(() => null);
    if (!plugins) return defaultEmbed();

    const plugin = plugins.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!plugin) {
        return infoEmbed({
            title: "Plugin Not Found",
            description: `The plugin "${name}" could not be found.`,
        });
    }

    const source = getPluginSource(plugin);
    const details = [
        `**Source:** ${source.name}`,
        `Platforms: ${getAvailabilityText(plugin.name, plugin.required, plugin.target)}`,
        plugin.enabledByDefault && "Enabled by default",
        plugin.hasCommands && `${plugin.commands.length} command${plugin.commands.length === 1 ? "" : "s"}`,
        plugin.tags?.length && `**Tags:** ${plugin.tags.join(", ")}`,
    ].filter(Boolean);

    return container([
        section(
            [
                `# ${plugin.name}`,
                plugin.description || "No description available.",
                `-# by ${formatAuthors(plugin.authors)}`,
            ].join("\n"),
            thumbnail(`${Urls.SITE_URL}${source.icon}`, `${plugin.name} icon`),
        ),
        separator(),
        text(details.join("\n")),
        actionRow([
            linkButton("View Website", `${Urls.SITE_URL}/plugins/${encodeURIComponent(plugin.name)}`),
            linkButton("View Source", `https://github.com/Equicord/Equicord/tree/main/${plugin.filePath}`),
        ]),
    ], source.color);
}
