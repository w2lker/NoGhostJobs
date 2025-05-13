import { Input } from '@/components/ui/input';
import Link from 'next/link';
import '@/app/global.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LocaleSwitcher } from '@/components/ui/localeSwitcher';

export const metadata = {
  title: 'NoGhostJobs',
  description: 'Find companies that actually respond to job applications',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <main className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-gray-300">
              <div className="container mx-auto pt-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <Link href="/" className="hover:opacity-80 transition-opacity">
                    <h1 className="text-2xl font-bold font-mono">NoGhostJobs</h1>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="flex w-full md:w-96 space-x-3">
                      <Input
                        type="search"
                        placeholder="Search companies..."
                        className="w-full"
                      />
                      <LocaleSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Main Content */}
            <div className="container mx-auto py-8">
              {children}
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
