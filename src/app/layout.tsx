// it's a server component
import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import ThemeProvider from "./context/themeContext";
import "./globals.scss";
import { openStdin } from "process";

// const roboto = Roboto({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });

const openSans = Open_Sans({
  style: "normal",
  subsets: ["latin"],
  weight: ["400"],
});

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        ></link>
      </head>
      <body suppressHydrationWarning={true} className={openSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
