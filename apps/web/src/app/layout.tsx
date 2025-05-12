import { Input } from '../components/ui/input';
import Link from 'next/link';
import './global.css';

export const metadata = {
  title: 'NoGhostJobs',
  description: 'Find companies that actually respond to job applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background">
          {/* Header */}
          <header className="border-b border-gray-300">
            <div className="container mx-auto pt-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <h1 className="text-2xl font-bold font-mono">NoGhostJobs</h1>
                </Link>
                <div className="w-full md:w-96">
                  <Input
                    type="search"
                    placeholder="Search companies..."
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </header>
          {/* Main Content */}
          <div className="container mx-auto py-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
