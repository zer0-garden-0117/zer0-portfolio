import '@mantine/core/styles.css';
import { type ReactNode } from "react";
import { MantineProvider } from '@mantine/core';
import localFont from "next/font/local";

const premolJP = localFont({
  src: "../../fonts/PlemolJP-Regular.ttf",
  display: "swap",
});

interface CustomMantineProviderProps {
  children: ReactNode;
}

export const CustomMantineProvider: React.FC<CustomMantineProviderProps> = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: `${premolJP.style.fontFamily}, sans-serif`,
        headings: { fontFamily: `${premolJP.style.fontFamily}, sans-serif` },
        fontFamilyMonospace: `${premolJP.style.fontFamily}, monospace`,
        components: {
          CodeHighlight: {
            styles: {
              code: {
                fontFamily: `${premolJP.style.fontFamily}, monospace`,
              },
            },
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
};