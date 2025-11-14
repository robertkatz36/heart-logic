import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import { Providers } from "./providers";
import "@/index.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["latin", "hebrew"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-hebrew",
});

export const metadata: Metadata = {
  title: "לוגיקת הלב - המרכז להתפתחות האדם",
  description: "קורסי מדיטציה מתקדמים להתפתחות תודעתית וצמיחה רוחנית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={notoSansHebrew.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

