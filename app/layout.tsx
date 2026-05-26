import "./globals.css";

import Footer from "@components/Layout/Footer";
import Navbar from "@components/Layout/Navbar";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const viewport: Viewport = {
    themeColor: "#216bff",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://equicord.org"),
    title: {
        default: "Equicord",
        template: "%s | Equicord",
    },
    description:
        "An enhanced version of Vencord with more than 100+ extra plugins.",
    openGraph: {
        siteName: "Equicord",
        type: "website",
        images: [
            {
                url: "/assets/opengraph.png",
                width: 1200,
                height: 630,
                alt: "Equicord Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/assets/opengraph.png"],
    },
};

export default function RootLayout({ children }: { children: ReactNode; }) {
    return (
        <html lang="en">
            <body className="bg-neutral-950 text-white">
                <Toaster position="top-right" gutter={8} />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
