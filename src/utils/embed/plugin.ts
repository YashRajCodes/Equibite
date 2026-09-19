import { Urls } from "@constants";
import { fetchPlugins, formatAuthors, getAvailabilityText, type Plugin } from "@utils/plugin";

import {
    actionRow,
    container,
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

    if (isModified) return { name: "Modified", icon: "/assets/icons/equicord/modified.webp" };
    if (lower.startsWith("src/equicordplugins")) return { name: "Equicord", icon: "/assets/icons/equicord/icon.png" };
    if (lower.startsWith("src/plugins")) return { name: "Vencord", icon: "/assets/icons/vencord/icon.webp" };

    return { name: "Unknown", icon: "/assets/icons/misc/userplugin.webp" };
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
        getAvailabilityText(plugin.name, plugin.required, plugin.target),
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
    ]);
}
