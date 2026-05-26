import type { NextConfig } from "next"
import { join } from "path"

const nextConfig: NextConfig = {
    redirects: async () => [
        {
            source: "/discord",
            destination: "https://discord.gg/wKgT9j2xfN",
            permanent: false,
        },
    ],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
        ],
    },
    turbopack: {
        root: __dirname,
    }
}

export default nextConfig
