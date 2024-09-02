import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
 });


export default function PokemonDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className={inter.className}>
            {children}
        </div>
    

    
  );
}