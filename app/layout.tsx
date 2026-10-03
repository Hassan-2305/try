import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhabath Catering | Luxury Wedding Catering in Kerala & Tamil Nadu",
  description:
    "Grand wedding feasts, reception banquets and custom menus served with love across Kerala and Tamil Nadu. Book your date with Muhabath Catering.",
  openGraph: {
    title: "Muhabath Catering",
    description: "Luxury wedding catering across Kerala & Tamil Nadu.",
    type: "website",
    images: [
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1200&h=630&fit=crop&q=70&auto=format",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#6e1f2b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-maroon focus:px-5 focus:py-3 focus:text-ivory"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
