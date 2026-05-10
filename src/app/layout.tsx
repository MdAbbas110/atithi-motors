import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://atithi-motors-workshop.netlify.app'),
  title: {
    default: 'Atithi Motors — TATA Authorized Service Center, Ghazipur',
    template: '%s | Atithi Motors',
  },
  description:
    'Atithi Motors is a TATA Motors Authorized Service Center in Ghazipur, UP. Expert vehicle servicing, genuine spare parts, DEF/Urea sales, cashless insurance claims, and free pickup & drop since 2018.',
  keywords: [
    'TATA service center Ghazipur',
    'Atithi Motors',
    'TATA authorized workshop',
    'DEF AdBlue Urea Ghazipur',
    'car service Ghazipur UP',
    'TATA Nexon service',
    'TATA Harrier service',
    'BS6 DEF urea dealer',
    'cashless insurance claim Ghazipur',
  ],
  authors: [{ name: 'Atithi Motors' }],
  creator: 'Atithi Motors',
  publisher: 'Atithi Motors',
  alternates: {
    canonical: 'https://atithi-motors-workshop.netlify.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://atithi-motors-workshop.netlify.app',
    siteName: 'Atithi Motors',
    title: 'Atithi Motors — TATA Authorized Service Center, Ghazipur',
    description:
      'TATA Motors Authorized Service Center in Ghazipur. Genuine parts, DEF/Urea sales, cashless insurance, free pickup & drop. Est. 2018.',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Atithi Motors TATA Authorized Service Center workshop in Ghazipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atithi Motors — TATA Authorized Service Center, Ghazipur',
    description:
      'TATA Motors Authorized Service Center in Ghazipur. Genuine parts, DEF/Urea sales, cashless insurance, free pickup & drop.',
    images: ['/preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
