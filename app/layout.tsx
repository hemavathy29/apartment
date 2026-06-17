import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import NavigationProgress from "@/components/NavigationProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Leisure's | Premium Serviced Apartments in Chennai",
  description:
    "The Leisure's Pvt.Ltd. offers luxury serviced apartments across Chennai — The Den Villa (S Kolathur), The Lavender (Kovilambakkam), The Ocean Shores (Thoraipakkam), and The Value Stay (Nanganallur).",
  keywords: "serviced apartments Chennai, luxury apartments, The Leisures, furnished apartments, The Den Villa, The Lavender, The Ocean Shores, The Value Stay",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }} className="min-h-screen flex flex-col">
        <NavigationProgress />
        {children}
      </body>
    </html>
  );
}
