import type { Metadata } from "next";
import "./ui/globals.css";
import { inter } from './ui/fonts'

export const metadata: Metadata = {
  title: "User Profile",
  description: "Created by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
