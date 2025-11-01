import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/index.css";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

