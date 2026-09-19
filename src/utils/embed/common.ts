import { Urls } from "@constants";

export type EmbedComponent = { type: number; [key: string]: unknown; };

export const DEFAULT_ACCENT = 0x216bff;

export const container = (
    components: EmbedComponent[],
    accentColor = DEFAULT_ACCENT,
): EmbedComponent => ({
    type: 17,
    accent_color: accentColor,
    components,
});

export const text = (content: string): EmbedComponent => ({
    type: 10,
    content,
});

export const separator = (spacing?: number): EmbedComponent =>
    spacing ? { type: 14, spacing } : { type: 14 };

export const section = (
    content: string,
    accessory: EmbedComponent,
): EmbedComponent => ({
    type: 9,
    components: [text(content)],
    accessory,
});

export const thumbnail = (
    url: string,
    description: string,
): EmbedComponent => ({
    type: 11,
    media: { url },
    description,
});

export const linkButton = (
    label: string,
    url: string,
    emojiId?: string,
): EmbedComponent => ({
    type: 2,
    style: 5,
    label,
    url,
    ...(emojiId && { emoji: { id: emojiId, name: label } }),
});

export const actionRow = (buttons: EmbedComponent[]): EmbedComponent => ({
    type: 1,
    components: buttons,
});

export const siteHeader = (content: string) =>
    section(content, thumbnail(`${Urls.SITE_URL}/assets/favicon.png`, "Equicord logo"));
