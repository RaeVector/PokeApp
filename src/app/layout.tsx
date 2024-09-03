import { Inter } from "next/font/google";
import "./globals.css";

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
           {children}
      </body>
    </html>
  );
}
