import Footer from "@components/Layout/Footer"
import Navbar from "@components/Layout/Navbar"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import "./globals.css"

export const metadata: Metadata = {
    title: {
        default: "Equicord",
        template: "%s | Equicord",
    },
    description:
        "An enhanced version of Vencord with more than 100+ extra plugins.",
    openGraph: {
        siteName: "Equicord",
        type: "website",
    },
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-neutral-950 text-white">
                <Toaster position="top-right" gutter={8} />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
