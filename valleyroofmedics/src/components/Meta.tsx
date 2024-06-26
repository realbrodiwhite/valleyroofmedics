// src/components/Meta.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Valley Roof Medics, Monte Vistas Professional Roofing Service Providers - Fix, Repair, Full Replacements',
  description: 'Valley Roof Medics is a top tier roofing company located in Monte Vista, Colorado. Providers of the best roof work in the entire San Luis Valley!',
  icons: {
    icon: '../../public/favicon.ico', // Update with your actual path
  },
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
};

const Meta = () => null; // This component can now be empty, as metadata is handled by the Next.js app

export default Meta;
