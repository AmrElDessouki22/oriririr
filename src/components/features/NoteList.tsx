'use client';

import { useNotes } from '@/contexts/NotesContext';
import Note from '@/components/features/Note';

export default function NoteList() {
  const { notes } = useNotes();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
