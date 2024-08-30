import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Slugger - Generate SEO-Friendly URLs",
    description:
        "Slugger is a tool to generate SEO-friendly URLs from any text. Simply enter your text and get a clean, easy-to-read URL slug.",
    keywords: [
        "url",
        "slug",
        "seo",
        "seo-friendly",
        "seo-friendly-url",
        "url-slug",
    ],
    openGraph: {
        title: "Slugger - Generate SEO-Friendly URLs",
        description:
            "Slugger is a tool to generate SEO-friendly URLs from any text. Simply enter your text and get a clean, easy-to-read URL slug.",
        images: [
            {
                url: "https://sluggers.vercel.app/sluggers-og-image-1.png",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {" "}
                <Toaster position="top-center" />
                {children}
            </body>
        </html>
    );
}
