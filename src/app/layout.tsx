import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Menu from '@/components/menu/menu';
import Footer from '@/components/Footer';
// import AntsFollowingMouse from '@/components/animation/AntsFollowingMouse';

// Khai báo font Verdana với các biến thể
const verdanaBoldItalic = localFont({
  src: './fonts/verdana-bold-italic.ttf',
  variable: '--font-verdana-bold-italic',
  weight: '600', // Bold
  style: 'italic',
});

const verdanaBold = localFont({
  src: './fonts/verdana-bold.ttf',
  variable: '--font-verdana-bold',
  weight: '600', // Bold
});

const verdanaRegular = localFont({
  src: './fonts/verdana.ttf',
  variable: '--font-verdana-regular',
  weight: '400', // Regular
});

// Metadata cho website
export const metadata: Metadata = {
  title: 'Coffee Tổ Kiến',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${verdanaBoldItalic.variable} ${verdanaBold.variable} ${verdanaRegular.variable} antialiased w-full h-full overflow-x-hidden`}
      >
        <Menu />

        <div className="relative lg:pt-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
