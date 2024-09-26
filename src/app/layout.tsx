import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  weight: "variable",
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-roboto-flex"
});

export const metadata: Metadata = {
  title: "Metaversal Demo",
  description: "Demo app created as a solution to code assignment from Metaversal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
