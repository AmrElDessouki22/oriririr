'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { NoteType } from '@/types';

interface NotesContextType {
  notes: NoteType[];
  addNote: (note: NoteType) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const addNote = (note: NoteType) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
