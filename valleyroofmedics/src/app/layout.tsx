// app/layout.tsx

import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Valley Roof Medics',
  description: 'Professional roofing services and solutions.',
  openGraph: {
    title: 'Valley Roof Medics',
    description: 'Professional roofing services and solutions.',
    url: 'https://valleyroofmedics.com',
    siteName: 'Valley Roof Medics',
    images: [
      {
        url: 'https://valleyroofmedics.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Valley Roof Medics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valley Roof Medics',
    description: 'Professional roofing services and solutions.',
    site: '@valleyroofmedics',
    creator: '@valleyroofmedics',
    images: [
      {
        url: 'https://valleyroofmedics.com/twitter-image.jpg',
        alt: 'Valley Roof Medics',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
