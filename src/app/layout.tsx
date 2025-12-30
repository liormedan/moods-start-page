
import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "MOODS - היומן הרגשי שלך",
  description: "עקוב אחרי מצב הרוח, צור קשר עם המטפל שלך וקבל תובנות חכמות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.className} antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
