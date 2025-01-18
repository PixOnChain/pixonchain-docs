import "./globals.css";

export const metadata = {
  title: "Pix on Chain - A Corretora de Criptomoedas.",
  description: "Bem-vindo à Pix on Chain, sua corretora de criptomoedas confiável.",
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
