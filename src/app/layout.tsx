import "./globals.css";
import { TenantProvider } from "./context/TenantContext";
import { TenantUrlProvider } from "./context/TenantUrlContext";

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
