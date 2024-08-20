import { Inter } from "next/font/google";
import "./globals.css";
import Header from "/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`} >
        <Header />
        <div>{children}</div></body>
    </html>
  );
}
