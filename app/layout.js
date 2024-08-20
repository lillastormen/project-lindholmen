import { Inter } from "next/font/google";
import "./globals.css";
import Header from "/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stories @ Lindholmen",
  description:
    "Upptäck lindholmen, låt din berättelse bli en del av Lindholmens historia ",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
