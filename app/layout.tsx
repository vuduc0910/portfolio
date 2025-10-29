import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Richard (Vo Vu Duc) - Senior Fullstack Developer | React, Next.js, Node.js Expert",
  description:
    "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, NestJS, and AWS. Led teams building blockchain collectibles, mobile apps, and enterprise systems handling 30,000+ concurrent users.",
  keywords: [
    "Fullstack Developer",
    "React Developer",
    "Next.js Expert",
    "Node.js Developer",
    "Vue.js",
    "NestJS",
    "AWS",
    "TypeScript",
    "Senior Developer",
    "Vo Vu Duc",
    "Richard Vo",
  ],
  authors: [{ name: "Richard (Vo Vu Duc)" }],
  creator: "Richard (Vo Vu Duc)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richardvo.dev",
    title: "Richard (Vo Vu Duc) - Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, and AWS. Building scalable applications for 30,000+ concurrent users.",
    siteName: "Richard Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Richard (Vo Vu Duc) - Senior Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard (Vo Vu Duc) - Senior Fullstack Developer",
    description: "Senior Fullstack Developer with 5 years of experience in React, Next.js, Vue, Node.js, and AWS.",
    images: ["/avatar.jpg"],
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Richard (Vo Vu Duc)",
              alternateName: "Vo Vu Duc",
              jobTitle: "Senior Fullstack Developer",
              description:
                "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, NestJS, and AWS",
              url: "https://richardvo.dev",
              image: "/avatar.jpg",
              email: "vuduc1711@gmail.com",
              telephone: "+84328691535",
              sameAs: ["https://www.linkedin.com/in/richardvo1412/", "https://github.com/vuduc0910"],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "Node.js",
                "NestJS",
                "AWS",
                "PostgreSQL",
                "MongoDB",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Post & Telecoms Institute of Technology",
              },
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Fanzeal Singapore",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
