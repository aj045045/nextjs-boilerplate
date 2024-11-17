import type { Metadata } from 'next';
import '@/styles/globals.css';
import { RootLayout } from './providers';

export const metadata: Metadata = {
    title: {
        default: 'Ansh Yadav',
        template: '%s | Ansh Yadav',
    },
    manifest: "/manifest.json",
    description: 'Portfolio of Ansh J Yadav',
    authors: [
        {
            name: 'Ansh Yadav',
            url: 'https://www.linkedin.com/in/ansh-yadav-0ab92424b/',
        },
    ],
};

export default RootLayout;
