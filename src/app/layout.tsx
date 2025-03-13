import type { Metadata } from 'next';
import { inter } from '@/styles/fonts';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Wokół Druku 3D',
  description: 'Szeroko pojęte drukowanie w technologi 3D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
