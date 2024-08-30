import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
