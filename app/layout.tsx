import type { Metadata } from "next";
import { TirbeoThemeProvider } from "@tirbeo/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.tirbeo.app"),
  title: {
    default: "Tirbeo UI Documentation",
    template: "%s | Tirbeo Docs",
  },
  description: "Tirbeo design system documentation and component playground",
  openGraph: {
    title: "Tirbeo UI Documentation",
    description: "Tirbeo design system documentation and component playground",
    url: "https://docs.tirbeo.app",
    siteName: "Tirbeo Docs",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function UiDocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TirbeoThemeProvider>{children}</TirbeoThemeProvider>
      </body>
    </html>
  );
}