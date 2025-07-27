import '@/app/globals.css';
import { NotesProvider } from '@/contexts/NotesContext';

export const metadata = {
  title: 'Note App',
  description: 'A comprehensive note-taking application built with Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}
