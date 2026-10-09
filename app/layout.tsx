import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'نور شاپ | زیبایی و مراقبت پوست',
  description: 'فروشگاه آنلاین محصولات مراقبت پوست، مو و زیبایی با ارسال سریع و گارانتی اصالت کالا.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
