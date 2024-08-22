import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
 });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mx-32 object-middle" lang="en">
      <body className={inter.className}>
           <Header/>
           <NavBar/>
           {children}
           <Footer/>
      </body>
    </html>
  );
}
