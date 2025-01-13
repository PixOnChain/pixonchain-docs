import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pix On Chain",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
