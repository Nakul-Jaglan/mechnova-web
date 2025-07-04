import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mechnova | Agricultural Machinery & Equipment Supplier",
  description:
    "Mechnova is a leading supplier of agricultural, gardening, and industrial machinery: brush cutters, chainsaws, sprayers, engines, generators, water pumps, and more. Reliable, innovative, and affordable equipment for farmers, landscapers, and professionals.",
  keywords:
    "agricultural machinery, farm equipment, brush cutter, chainsaw, sprayer, generator, engine, water pump, gardening tools, Mechnova, agroindustrial, India, Colombia, Mexico, Peru, Guatemala",
  authors: [{ name: "Mechnova Machines", url: "https://mechnovamachines.com" }],
  openGraph: {
    title: "Mechnova | Agricultural Machinery & Equipment Supplier",
    description:
      "Reliable, innovative, and affordable agricultural machinery and equipment for farms, gardens, and industry. Explore our range of brush cutters, chainsaws, sprayers, engines, generators, and more.",
    url: "https://mechnovamachines.com",
    siteName: "Mechnova",
    images: [
      {
        url: "/letter.png",
        width: 600,
        height: 315,
        alt: "Mechnova Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mechnova",
    title: "Mechnova | Agricultural Machinery & Equipment Supplier",
    description:
      "Reliable, innovative, and affordable agricultural machinery and equipment for farms, gardens, and industry. Explore our range of brush cutters, chainsaws, sprayers, engines, generators, and more.",
    images: [
      {
        url: "/letter.png",
        alt: "Mechnova Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "https://mechnovamachines.com",
    languages: {
      en: "https://mechnovamachines.com",
      es: "https://mechnovamachines.com/es",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0072ce" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/letter.png" />
        <link rel="canonical" href="https://mechnovamachines.com" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
      </head>
      <body className={`${exo2.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
