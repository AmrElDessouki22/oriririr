'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  );
}
