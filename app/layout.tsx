import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorDot from "@/components/CursorDot";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RunoFlow | Predictable Clients. Engineered.",
  description:
    "Automated outbound systems that generate qualified leads and booked calls — consistently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased font-sans bg-black text-zinc-100">
        <SmoothScroll>
          <CursorDot />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
