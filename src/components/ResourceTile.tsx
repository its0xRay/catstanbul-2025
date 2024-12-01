import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ResourceTileProps {
  title: string;
  description: string;
}

export function ResourceTile({ title, description }: ResourceTileProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-lg">{title}</span>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isExpanded && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
}