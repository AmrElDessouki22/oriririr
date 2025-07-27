'use client';

import { NoteType } from '@/types';
import Button from '@/components/ui/Button';

interface NoteProps {
  note: NoteType;
}

export default function Note({ note }: NoteProps) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.content}</p>
      <Button label="Edit" onClick={() => alert('Edit functionality not implemented yet')} />
    </div>
  );
}
