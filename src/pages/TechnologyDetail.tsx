import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Eye,
  Calendar,
  Tag,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  Clock,
  User,
} from 'lucide-react';
import { techArticles } from '../data/mockData';
import type { TechArticle } from '../types';

export default function TechnologyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isCollected, setIsCollected] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const article = useMemo<TechArticle | undefined>(() => {
    return techArticles.find((a) => a.id === id);
  }, [id]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return techArticles
      .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
      .slice(0, 3);
  }, [article]);

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold text-slate-800 mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        const items: string[] = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(lines[i].replace('- ', ''));
          i++;
        }
        i--;
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-slate-600">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      } else if (/^\d+\.\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\.\s/, ''));
          i++;
        }
        i--;
        elements.push(
          <ol key={key++} className="list-decimal list-inside space-y-2 my-4 text-slate-600">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        );
      } else if (line.trim() !== '') {
        elements.push(
          <p key={key++} className="text-slate-600 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-2">文章未找到</h2>
          <p className="text-slate-500 mb-4">您访问的文章不存在或已被移除</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {showShareToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg animate-fade-in">
          分享链接已复制到剪贴板
        </div>
      )}

      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回列表
          </button>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/30 text-blue-200">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.publishDate}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {article.views.toLocaleString()} 阅读
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              约 {Math.ceil(article.content.length / 500)} 分钟阅读
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              {article.coverImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose-content">
                  {renderMarkdown(article.content)}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsCollected(!isCollected)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                          isCollected
                            ? 'bg-amber-50 text-amber-600 border border-amber-200'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${isCollected ? 'fill-amber-500' : ''}`} />
                        {isCollected ? '已收藏' : '收藏'}
                      </button>
                      <button
                        onClick={handleShare}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                        分享
                      </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {Math.floor(article.views / 10)} 点赞
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">作者信息</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{article.author}</p>
                  <p className="text-sm text-slate-500">资深作者</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                专注于介入放射学领域研究，发表学术论文多篇。
              </p>
            </div>

            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-800 mb-4">相关文章</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <div
                      key={related.id}
                      onClick={() => navigate(`/technology/${related.id}`)}
                      className="group cursor-pointer"
                    >
                      <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{related.publishDate}</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {related.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/technology')}
                  className="w-full mt-4 pt-4 border-t border-slate-100 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1"
                >
                  查看更多
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-semibold mb-2">学习资料</h3>
              <p className="text-sm text-white/80 mb-4">
                获取更多DSA技术资料、操作指南和培训课程
              </p>
              <button
                onClick={() => navigate('/technology')}
                className="w-full py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm"
              >
                浏览全部技术文章
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
