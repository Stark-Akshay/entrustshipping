import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";


export const metadata: Metadata = {
  title: {
    default: "Entrust Shipping ",
    template: "%s | Entrust Shipping"
  },
  description: "Entrust Shipping offers fast, reliable, and cost-effective global logistics solutions. Your trusted partner for international shipping and seamless freight forwarding.",
  keywords: "global shipping, logistics, freight forwarding, cargo, Entrust Shipping",
  authors: [{ name: "Entrust Shipping", url: "https://www.entrustshipping.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Entrust Shipping | Global Logistics & Shipping Solutions",
    description: "Your one-stop shop for global shipping and logistics. Get seamless, efficient, and reliable freight services with Entrust Shipping.",
    url: "https://www.entrustshipping.com",
    siteName: "Entrust Shipping",
    type: "website",
    images: [
      {
        url: "/images/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Entrust Shipping - Global Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrust Shipping | Global Logistics & Shipping Solutions",
    description: "Your trusted partner for international shipping and seamless freight forwarding.",
    images: ["/images/opengraph-image.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Poppins antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
