import "./globals.css";
import ThemeRegistry from "../components/ThemeRegistry";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Open Hearts",
  description: "Navigate the emotional and financial risks of online romance fraud in this interactive exhibit, Open Hearts. Learn the tactics scammers use and how to protect yourself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
