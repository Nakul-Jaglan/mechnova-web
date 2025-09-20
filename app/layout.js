import { Exo_2 } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/lib/useTranslation";
import ChatbaseWidget from "@/components/ChatbaseWidget";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Mechnova | Agricultural Machinery & Equipment Supplier",
    template: "%s | Mechnova"
  },
  description:
    "Mechnova is a leading supplier of agricultural, gardening, and industrial machinery: brush cutters, chainsaws, sprayers, engines, generators, water pumps, and more. Reliable, innovative, and affordable equipment for farmers, landscapers, and professionals.",
  keywords:
    "agricultural machinery, farm equipment, brush cutter, chainsaw, sprayer, generator, engine, water pump, gardening tools, Mechnova, agroindustrial, India, Colombia, Mexico, Peru, Guatemala, maquinaria agrícola, equipos agrícolas, desbrozadora, motosierra, fumigadora, generador, motor, bomba de agua",
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
      es: "https://mechnovamachines.com/",
    },
  },
  other: {
    "title:es": "Mechnova | Proveedor de Maquinaria y Equipos Agrícolas",
    "description:es": "Mechnova es un proveedor líder de maquinaria agrícola, de jardinería e industrial: desbrozadoras, motosierras, fumigadoras, motores, generadores, bombas de agua y más. Equipos confiables, innovadores y asequibles para agricultores, paisajistas y profesionales.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={exo2.variable}>
      <body>
        <TranslationProvider>
          {children}
          <ChatbaseWidget />
        </TranslationProvider>
      </body>
    </html>
  );
}
