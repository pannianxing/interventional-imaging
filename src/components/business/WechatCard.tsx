import { Eye, Calendar } from 'lucide-react';
import type { WechatArticle } from '@/types';

interface WechatCardProps {
  article: WechatArticle;
  onClick?: () => void;
}

export default function WechatCard({ article, onClick }: WechatCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <span className="text-xs text-white/90 font-medium">
            {article.accountName}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm leading-relaxed">
          {article.title}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-2">
          {article.summary}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="px-2 py-0.5 rounded bg-green-50 text-green-600 font-medium">
            {article.category}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {article.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.publishDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
