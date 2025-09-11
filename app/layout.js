import "./globals.css";
import StyledComponentsRegistry from './registry'
import localFont from 'next/font/local';

const phosphateSolid = localFont({
  src: [{ path: './fonts/phosphatesolid.woff2', weight: '400', style: 'normal' }],
  variable: '--font-phosphate-solid',
  display: 'swap',
});

const phosphateInline = localFont({
  src: [{ path: './fonts/phosphateinline.woff2', weight: '400', style: 'normal' }],
  variable: '--font-phosphate-inline',
  display: 'swap',
});

export const metadata = {
  title: "Arcventives Ltd - Building Tomorrow's Legacy, Today!",
  description:
    "From architecture to construction execution, Arcventives delivers innovative spaces tailored to client needs across residential, commercial, and industrial projects.",
  keywords: [
    "construction company",
    "building contractors",
    "architectural design",
    "engineering firm",
    "Nigeria construction"
  ],
  openGraph: {
    title: "Arcventives Ltd",
    description:
      "Trusted by clients, powered by experience, delivered by engineers. Building Tomorrow’s Legacy, Today!",
    url: "https://arcventives.com",
    siteName: "Arcventives Ltd",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arcventives Construction"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aconvenus LTD",
    description:
      "World-class construction solutions: architectural design, building construction, civil & structural engineering.",
    images: ["/opengraph-image.png"],
    creator: "@aconvenus"
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${phosphateInline.variable} ${phosphateSolid.variable}`}>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Manrope:wght@200..800&display=swap" rel="stylesheet"></link>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body  >
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>

      </body>
    </html>
  );
}
