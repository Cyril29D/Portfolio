import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CD — Portfolio",
  description: "Portfolio et CV de Cyril Delly, étudiant en MSc à Epitech et développeur full-stack.",
  icons: {
    icon: "/images/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={bricolageGrotesque.className}>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="19241d09-0542-4d97-87ee-4409b76fde61"
          strategy="afterInteractive"
        />
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
