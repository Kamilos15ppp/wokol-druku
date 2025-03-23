import type { Metadata } from 'next';
import { inter } from '@/styles/fonts';
import content from '@/utils/textContent';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pl'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
