import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaadPay - Libya's Trusted Digital Wallet",
  description: "Libya's trusted digital wallet with secure escrow payments and multi-bank integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white antialiased`}>
        <ThemeProvider>
          <div className="relative overflow-hidden">
            {/* Background noise effect */}
            <div className="fixed inset-0 bg-neutral-100 dark:bg-neutral-950 opacity-50 pointer-events-none z-[-2]" 
                style={{ backgroundImage: "url('/noise.png')", backgroundRepeat: "repeat" }}></div>
            
            {/* Background gradient blobs (desktop) */}
            <div className="fixed left-[-15%] top-[-15%] w-[50%] h-[50%] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-60 dark:opacity-30 pointer-events-none z-[-1]"></div>
            <div className="fixed right-[-15%] bottom-[-15%] w-[50%] h-[50%] bg-gradient-to-tl from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-full blur-3xl opacity-60 dark:opacity-30 pointer-events-none z-[-1]"></div>
            
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
