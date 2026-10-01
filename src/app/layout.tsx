import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://casamiento.local'),
  title: "A & M | Recovery Kit & Wedding Guide",
  description: "Un pequeño kit para la resaca y guía informativa de nuestra boda. Con cariño, A & M.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "A & M | Kit para la Resaca",
    description: "Esperamos que bailes, brindes, rías y disfrutes cada momento con nosotros.",
    images: ["/esp.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${cinzel.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col font-sans selection:bg-[#c5a059]/25 selection:text-[#20382e]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
