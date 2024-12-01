import { ReactNode } from 'react';

interface AgendaItemProps {
  icon: ReactNode;
  title: string;
}

export function AgendaItem({ icon, title }: AgendaItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="text-black text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
}