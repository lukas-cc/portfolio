import "../../styles/globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} overflow-x-hidden`}
    >
      <body className="min-h-dvh w-full overflow-x-hidden antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
