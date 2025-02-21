import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../components/GlobalComponents/Menu.js";
import Loader from "../components/GlobalComponents/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS x GSAP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        {/* commented for now
         <Loader /> 
        */}
        <Menu />
        <div className="w-full h-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}