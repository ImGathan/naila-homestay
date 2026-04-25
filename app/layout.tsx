import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naila Homestay - Penginapan Nyaman & Strategis",
  description: "Cari homestay murah di Banyuwangi? Naila Homestay menyediakan AC, WiFi, & parkir luas. Hanya 19 km dari Watu Dodol. Booking sekarang untuk kenyamanan maksimal!",
  keywords: ["homestay banyuwangi", "penginapan murah banyuwangi", "guest house banyuwangi", "penginapan di banyuwangi", "penginapan bwi", "penginapan dekat watu dodol", "homestay keluarga banyuwangi"],
  openGraph: {
    title: 'Naila Homestay Banyuwangi',
    description: 'Penginapan nyaman dan estetik di Banyuwangi.',
    url: 'https://nailahomestay.vercel.app',
    siteName: 'Naila Homestay',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BedAndBreakfast",
    "name": "Naila Homestay Banyuwangi",
    "image": "https://website-kamu.vercel.app/hero-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kemuning",
      "addressLocality": "Banyuwangi",
      "addressRegion": "Jawa Timur",
      "postalCode": "68424",
      "addressCountry": "ID"
    },
    "priceRange": "Rp150.000 - Rp300.000",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.2090394,
      "longitude": 114.3433826
    }
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}