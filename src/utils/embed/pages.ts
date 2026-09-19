import { container, siteHeader } from "./common";

export type PageInfo = { title: string; description: string; };

export const PAGES: Record<string, PageInfo> = {
    team: {
        title: "Meet the Team",
        description: "The amazing people behind Equicord.",
    },
    projects: {
        title: "Projects",
        description: "Browse the active repositories maintained by the Equicord organisation.",
    },
    icons: {
        title: "Icon Gallery",
        description: "Browse and download custom Discord icons for Equicord.",
    },
    cloud: {
        title: "Equicord Cloud",
        description: "Sync your settings across all your apps and devices with Equicord's cloud integration.",
    },
    "cloud-policy": {
        title: "Cloud Privacy Policy",
        description: "Privacy policy for Equicord's cloud services.",
    },
    "cloud-gdpr": {
        title: "Cloud GDPR Policy",
        description: "How Equicord's cloud services handle your data under the GDPR.",
    },
};

export const getPageInfo = (page: string | null) =>
    page && Object.hasOwn(PAGES, page) ? PAGES[page] : undefined;

export const infoEmbed = (info: PageInfo) =>
    container([siteHeader(`# ${info.title}\n${info.description}`)]);
