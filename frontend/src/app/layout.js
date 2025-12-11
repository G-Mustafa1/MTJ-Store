import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elegance Beauty - Premium Perfume, Makeup & Ladies Fashion",
  description:
    "Discover our exclusive collection of premium perfumes, makeup, ladies bags, and fashion accessories. Shop the finest beauty products with elegance.",
  openGraph: {
    title: "Elegance Beauty - Premium Perfume, Makeup & Ladies Fashion",
    description:
      "Discover our exclusive collection of premium perfumes, makeup, ladies bags, and fashion accessories.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
