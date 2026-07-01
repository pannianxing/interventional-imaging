import { Eye, Heart, Calendar } from 'lucide-react';
import type { CaseItem } from '@/types';

interface CaseCardProps {
  caseData: CaseItem;
  onClick?: () => void;
}

export default function CaseCard({ caseData, onClick }: CaseCardProps) {
  const difficultyColors = {
    '初级': 'bg-green-100 text-green-700',
    '中级': 'bg-yellow-100 text-yellow-700',
    '高级': 'bg-red-100 text-red-700',
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={caseData.images[0]}
          alt={caseData.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${difficultyColors[caseData.difficulty]}`}>
            {caseData.difficulty}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            {caseData.department}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {caseData.title}
        </h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {caseData.summary}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {caseData.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" />
              {caseData.likes}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {caseData.publishDate}
          </span>
        </div>
      </div>
    </div>
  );
}
