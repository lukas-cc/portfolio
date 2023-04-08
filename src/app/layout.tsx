import "../../styles/globals.css";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin"] });
export const metadata = {
  title: "Lukas Portfolio",
  description: "Welcome to my personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <header className="mt-5">
          <nav>
            <ul className="flex flex-wrap justify-center gap-12 text-2xl md:mr-10 md:justify-end md:gap-20 ">
              <Link
                href="/"
                className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-300"
              >
                Home
              </Link>
              <Link
                href="about"
                className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-300"
              >
                About
              </Link>
              <a className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-300">
                Contact
              </a>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
