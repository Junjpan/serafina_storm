// it's a server component
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./context/themeContext";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serafina art gallery",
  description: "A collection of arts created by Serafina Storm",
  keywords: "kid, art gallery, children, Serafina, drawing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
