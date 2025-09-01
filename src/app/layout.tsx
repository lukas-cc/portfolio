import "../../styles/globals.css";
import { Quicksand } from "next/font/google";
import { Header } from "../components/header";
import { Footer } from "@/components/footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Lukas Ciepielowski",
  description: "Welcome to my personal portfolio",
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
      <body className="absolute inset-0 z-50 min-h-screen w-full bg-[radial-gradient(#404141_1px,transparent_1px)] bg-size-[40px_40px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
