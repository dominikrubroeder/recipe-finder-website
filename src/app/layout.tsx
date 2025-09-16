import type {Metadata} from "next";
import {Nunito, Nunito_Sans} from "next/font/google";
import "./globals.css";
import {Footer, Header} from "@/components/organismns/layout";

const nunitoSans = Nunito_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
});

const nunito = Nunito({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Recipe Finder Website | Dominik Rubröder",
    description: "Frontend challenge solution by Dominik Rubröder",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${nunitoSans.variable} ${nunito.variable} antialiased`}
        >
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
