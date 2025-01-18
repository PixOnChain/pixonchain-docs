import "./globals.css";

export const metadata = {
  title: "Pix on Chain - A Corretora de Criptomoedas.",
  description: "Pix on Chain - tornamos fácil aquilo que parecia difícil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
