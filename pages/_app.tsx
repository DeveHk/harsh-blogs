import { ChakraProvider } from "@chakra-ui/react";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import "../styles/globals.css";
const Bacasime = localFont({
  src: [
    {
      path: "../public/Bacasime_Antique/BacasimeAntique-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={Bacasime.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
