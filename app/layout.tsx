import type { Metadata, Viewport } from "next"
import { Sawarabi_Gothic } from "next/font/google"
import Script from "next/script"
import type { ReactNode } from "react"

import GlobalStyles from "@/components/GlobalStyles"
import StyledComponentsRegistry from "@/lib/registry"

const sawarabiGothic = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sawarabi-gothic",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://reload.co.jp"),
  title: "Reload, Inc.",
  description: "株式会社リロードは新しい可能性を提供するシステム会社です。",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "株式会社リロード",
    type: "website",
    url: "https://reload.co.jp",
    title: "株式会社リロード",
    description: "株式会社リロードは新しい可能性を提供するシステム会社です。",
  },
  twitter: {
    card: "summary",
    site: "@reload_co_jp",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={sawarabiGothic.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NGM16ZWHTR" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NGM16ZWHTR');
          `}
        </Script>
      </body>
    </html>
  )
}
