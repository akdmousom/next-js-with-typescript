import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"]

});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster/>
          <div className="max-w-screen bg-purple-300 h-10">
            <h1>Header</h1>
          </div>
          {children}
          <div className="max-w-screen bg-purple-500 h-10">
            <h1>Footer</h1>
          </div>
      </body>
    </html>
  );
}
