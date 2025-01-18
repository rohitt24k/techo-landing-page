import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Technova Solutions | Innovative Tech Solutions for Modern Businesses',
  description:
    'Discover cutting-edge technology services and solutions with Technova Solutions. Empowering businesses with tailored IT, software development, and digital transformation services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
          <Navbar />
          <main className='pt-16'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
