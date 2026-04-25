import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reframe.zumaica.com"),
  title: {
    default: "RE:FRAME — TikTokを起点にビジネスをリフレームする",
    template: "%s | RE:FRAME",
  },
  description:
    "株式会社zumaicaが提供するSNS運用・TikTok戦略・ブランディング支援。企画から撮影・編集・分析まで丸投げで、御社のビジョンを未来へ残る資産に変えます。",
  keywords: [
    "RE:FRAME",
    "リフレーム",
    "zumaica",
    "TikTok運用代行",
    "SNSマーケティング",
    "SNSコンサルティング",
    "ショート動画",
    "採用",
    "集客",
    "ブランディング",
  ],
  openGraph: {
    title: "RE:FRAME — TikTokを起点にビジネスをリフレームする",
    description:
      "企画・台本・撮影・編集・投稿・分析まで丸投げ。SNSを通じて御社のビジョンと魅力を未来に残る資産として動画で発信する、戦略型の運用代行。",
    siteName: "RE:FRAME",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE:FRAME — TikTokを起点にビジネスをリフレームする",
    description:
      "SNS運用・TikTok戦略・ブランディング支援。企画から分析まで丸ごとお任せ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
