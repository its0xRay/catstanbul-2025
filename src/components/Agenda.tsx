import { Megaphone, Users, Workflow, UserSquare2, FileSpreadsheet } from 'lucide-react';
import { AgendaItem } from './AgendaItem';

export function Agenda() {
  const agendaItems = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Major Platform Announcements",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Key New Initiatives and Partnerships",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Highlight Existing & New Workgroups",
    },
    {
      icon: <UserSquare2 className="w-8 h-8" />,
      title: "Put Face to the Usernames",
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8" />,
      title: "Crucial Processes IRL",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Agenda</h2>
      <div className="grid gap-3 w-[420px] mx-auto">
        {agendaItems.map((item, index) => (
          <AgendaItem key={index} {...item} />
        ))}
      </div>
      <p className="text-center mt-8 text-gray-600">
        Detailed Day 1 & Day 2 Agenda announcements coming soon
      </p>
    </div>
  );
}