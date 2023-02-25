import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
