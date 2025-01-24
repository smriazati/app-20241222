'use client'
import { Manrope } from 'next/font/google';
import { SiteHeader } from "@/components/Site/Header";
import '../globals.css'
import { SiteFooter } from '@/components/Site/Footer';

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-primary", // Updated variable name to match Tailwind config
    weight: ["400", "700"],
    preload: true,
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {


    return (
        <html lang="en">
            <body className={`${manrope.variable} transition-container}`}>
                <div className="min-h-screen flex flex-col justify-between bg-cream text-black">
                    <SiteHeader />
                    <div className="grow">
                        {children}
                    </div>
                    {/* <SiteFooter /> */}
                </div>
            </body>
        </html>
    );
}

