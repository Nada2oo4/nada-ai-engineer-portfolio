import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nada Ashraf — AI Engineer",
    template: "%s | Nada Ashraf",
  },
  description:
    "Nada Ashraf is an AI Engineer building intelligent systems with LLMs, RAG, Agentic AI, recommendation systems, and machine learning.",
  applicationName: "Nada Ashraf — AI Engineer Portfolio",
  authors: [{ name: "Nada Ashraf" }],
  creator: "Nada Ashraf",
  keywords: [
    "Nada Ashraf",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM",
    "RAG",
    "Agentic AI",
    "LangGraph",
    "FastAPI",
    "NLP",
    "Recommendation Systems",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nada Ashraf — AI Engineer",
    title: "Nada Ashraf — AI Engineer",
    description:
      "AI Engineer building intelligent systems with LLMs, RAG, Agentic AI, and machine learning.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nada Ashraf — AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nada Ashraf — AI Engineer",
    description:
      "AI Engineer building intelligent systems with LLMs, RAG, Agentic AI, and machine learning.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
