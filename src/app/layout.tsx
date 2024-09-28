import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import QueryProvider from "./query-provider";

const robotoFlex = Roboto_Flex({
  weight: "variable",
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: "Metaversal Demo",
  description:
    "Demo app created as a solution to code assignment from Metaversal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} antialiased`}>
        <QueryProvider>
        <div className="flex flex-col items-center">
          <div className="max-w-3xl p-4">{children}</div></div>
        </QueryProvider>
      </body>
    </html>
  );
}
