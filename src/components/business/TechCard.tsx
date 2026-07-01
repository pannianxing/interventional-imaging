import { Eye, Calendar, Tag } from 'lucide-react';
import type { TechArticle } from '@/types';

interface TechCardProps {
  article: TechArticle;
  onClick?: () => void;
}

export default function TechCard({ article, onClick }: TechCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col sm:flex-row"
    >
      {article.coverImage && (
        <div className="relative sm:w-48 h-40 sm:h-auto overflow-hidden flex-shrink-0">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            {article.category}
          </span>
        </div>
        <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{article.author}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {article.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
