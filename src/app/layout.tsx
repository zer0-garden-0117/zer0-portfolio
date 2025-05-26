import "./globals.css";
import '@mantine/core/styles.css';
import '@gfazioli/mantine-text-animate/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { CustomMantineProvider } from "@/providers/mantine/mantineProviders";
import { AppShellLayout } from "@/components/AppShellLayout/AppShellLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <ColorSchemeScript />
      </head>
      <body>
        <CustomMantineProvider>
          <AppShellLayout>
            {children}
          </AppShellLayout>
        </CustomMantineProvider>
      </body>
    </html>
  );
}
