import "./globals.css";
import { LanguageProvider } from "./utils/languageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixley API Documentation",
  description: "Documentação dos endpoints da API Pixley Crypto Transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
