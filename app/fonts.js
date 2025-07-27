import { Outfit, Ovo } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});
