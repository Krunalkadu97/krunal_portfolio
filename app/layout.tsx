import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const popins = Poppins({ subsets: ["latin"],weight: ["100", "200", "400", "700", "900"] });


export const metadata: Metadata = {
  title: "Krunal Stack",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
