import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import ThemeRegistry from '@/components/ThemeRegistry';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNSW WIESoc",
  description: "UNSW Women in Engineering Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <NavBar/>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
