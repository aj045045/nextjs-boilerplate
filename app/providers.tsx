'use client';
import { SWRConfig } from 'swr';
import { NextUIProvider, Switch } from '@nextui-org/react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { geistMono, geistSans } from '@/langs';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isDark, setIsDark] = useState(false);
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen p-2 ${isDark ? 'dark' : 'light'}`}
            >
                <NextUIProvider>
                    <div className="w-full flex justify-end mb-2">
                        <Switch
                            defaultSelected
                            size="lg"
                            color="success"
                            startContent={<Sun />}
                            endContent={<Moon />}
                            onClick={() => setIsDark(!isDark)}
                        />
                    </div>
                    <SWRConfig
                        value={{
                            fetcher: async (url: string) => {
                                // Simulate a delay for demonstration
                                await new Promise((resolve) => setTimeout(resolve, 3000));
                                const response = await fetch(url);
                                const data = await response.json();
                                if (!response.ok || data.error) {
                                    throw new Error(data.error);
                                }
                                return data;
                            },
                            onError: (error) => {
                                if (error instanceof Error) {
                                    toast.error(error.message);
                                } else {
                                    toast.error('An unknown error occurred');
                                }
                            },
                            onSuccess: () => {
                                toast.success('Data loaded successfully!');
                                setTimeout(() => toast.dismiss(), 2000);
                            },
                        }}
                    >
                        {children}
                        <Toaster position="top-right" />
                    </SWRConfig>
                </NextUIProvider>
            </body>
        </html>
    );
}
