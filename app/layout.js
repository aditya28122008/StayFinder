import "./globals.css";
import SessionWrapper from "@/Components/SessionWrapper";
import NavbarServer from "@/Components/NavbarServer";
import { ThemeProvider } from "next-themes";
import { ToastContainer, toast } from "react-toastify";
import ThemeClass from "@/Components/ThemeClass";
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: "Stay Finder - Find Your Perfect Stay",
  description: "Find your perfect stay",
};
// A comment
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionWrapper>
            <ThemeClass>
              <NavbarServer />
              <ToastContainer />
              {children}
            </ThemeClass>
          </SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
