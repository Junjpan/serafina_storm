import { Dancing_Script, Pacifico, Roboto } from "next/font/google";

export const dancingScript = Dancing_Script({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
});
