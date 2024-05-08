import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {

};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16.ico"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32.ico"/>
      </head>
      <body className={inter.className}>
      {children}
      <Footer></Footer>
      </body>
      </html>
  );
}
