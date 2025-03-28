import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/app-sidebar";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"]
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boat notes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceMono.className} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange 
        >
          <div className="flex flex-col min-h-screen w-full">
            <NavBar />
            <SidebarProvider>
              
                <AppSidebar />
                <main className="flex flex-1 flex-col px-8 py-8 pt-10">
                  <SidebarTrigger />
                  {children}
                </main>
             
            </SidebarProvider>
           
            <Toaster position="top-right"/>

          </div>
          
        </ThemeProvider>
        
      </body>
    </html>
  );
}
