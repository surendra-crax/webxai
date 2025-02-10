import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { db } from "@/lib/prisma";


const inter =Inter({subsets:["latin"]});

export const metadata = {
  title: "WebX-AI Career Coach",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} `}
      >
{/* appearance={{
          baseTheme: dark  ,
         } }*/}

        <ClerkProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header*/}
           <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/*footer*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200" >
                <p>Copyright 2025 @ WebX</p>
              </div>
            </footer>
          </ThemeProvider>
          </ClerkProvider>
      </body>
    </html>
  );
}
