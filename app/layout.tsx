import type {Metadata} from 'next';
import {Inter, Outfit} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'KFZ-Meisterbetrieb Hamburg',
  description: 'Ihre vertrauenswürdige KFZ-Werkstatt in Hamburg.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
