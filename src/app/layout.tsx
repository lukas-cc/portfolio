import "../../styles/globals.css";
import { Quicksand } from "next/font/google";
import { Header } from "../components/Header";

const quicksand = Quicksand({ subsets: ["latin"] });
export const metadata = {
  title: "Lukas Ciepielowski",
  description: "Welcome to my personal portfolio website",
  icons: {
    icon: "/my-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
