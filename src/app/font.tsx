import { Dancing_Script, Pacifico, Anton } from "next/font/google";

export const dancingScript = Dancing_Script({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});
