import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type Arch = "universal" | "x64" | "arm64";
export type DisplayServer = "combined" | "x11" | "wayland";

export interface Download {
    text: string
    href: string
    arch?: Arch
    display?: DisplayServer
    prioritize?: boolean
    note?: string
}

export interface Platform {
    title: string
    icon: IconDefinition
    downloads: Download[]
    isCurrent: boolean
    warning?: string
    subtext?: string
    subsection?: Download[]
}

export interface Section {
    title: string
    description: string
    githubUrl: string
    platforms: Platform[]
    globalWarning?: string
}
