import "./globals.css";
import { TenantProvider } from "./context/TenantContext";
import { TenantUrlProvider } from "./context/TenantUrlContext";

export const metadata = {
  title: "Pix on Chain - A Corretora de Criptomoedas.",
  description: "Pix on Chain - tornamos fácil aquilo que parecia difícil.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <TenantProvider>
          <TenantUrlProvider>
            {children}
          </TenantUrlProvider>
        </TenantProvider>
      </body>
    </html>
  );
}
