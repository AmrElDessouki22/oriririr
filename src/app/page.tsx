import React from 'react';
import Header from '@/components/ui/Header';
import NoteList from '@/components/features/NoteList';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main>
        <h1 className="text-2xl font-bold">My Notes</h1>
        <NoteList />
      </main>
    </div>
  );
}
