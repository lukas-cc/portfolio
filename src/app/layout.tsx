import "../../styles/globals.css";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin"] });
export const metadata = {
  title: "Lukas Portfolio",
  description: "Welcome to my personal portfolio",
  icons: {
    icon: "/my-logo.svg",
  },
};

// const goToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <header className="sticky top-0 bg-base-100 py-5">
          <nav>
            <ul className="flex flex-wrap justify-center gap-12 text-2xl md:mr-10 md:justify-end md:gap-20 ">
              <Link
                href="/"
                className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-secondary"
              >
                Home
              </Link>
              <Link
                href="about"
                className="delay-50 cursor-pointer transition ease-in-out hover:scale-110 hover:text-secondary"
              >
                About
              </Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
