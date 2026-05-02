import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const OutfitFont = Outfit({
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="bg-gray-100">
          {children}
        </main>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
