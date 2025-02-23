import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "SangeetX by Diwan",
  description: "Discover and enjoy your favorite music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-gray-900 text-white`}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
