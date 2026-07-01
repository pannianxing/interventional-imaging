import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Eye,
  Calendar,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  Clock,
  Newspaper,
  Users,
} from 'lucide-react';
import { wechatArticles, wechatAccounts } from '../data/mockData';
import type { WechatArticle } from '../types';

export default function WechatArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isCollected, setIsCollected] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const article = useMemo<WechatArticle | undefined>(() => {
    return wechatArticles.find((a) => a.id === id);
  }, [id]);

  const account = useMemo(() => {
    if (!article) return null;
    return wechatAccounts.find((a) => a.id === article.accountId);
  }, [article]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return wechatArticles
      .filter((a) => a.id !== article.id && a.accountId === article.accountId)
      .slice(0, 4);
  }, [article]);

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
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
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg">
          分享链接已复制到剪贴板
        </div>
      )}

      <div className="bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回列表
          </button>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/30 text-emerald-200">
              {article.category || '公众号精选'}
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            {account && (
              <span className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                {account.name}
              </span>
            )}
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
              约 {Math.ceil(article.summary.length / 200) + 3} 分钟阅读
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
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-8 rounded-r-lg">
                  <p className="text-emerald-800 leading-relaxed">
                    <span className="font-semibold">文章摘要：</span>
                    {article.summary}
                  </p>
                </div>

                <div className="prose-content">
                  <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 pb-2 border-b border-slate-200">
                    文章内容
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    本文由 {account?.name || '相关公众号'} 原创发布，内容仅供学习参考。如需获取完整文章内容，请关注对应公众号查看原文。
                  </p>
                  <div className="bg-slate-50 rounded-lg p-6 mt-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <span className="font-semibold text-slate-700">温馨提示：</span>
                      本站仅转载公众号文章摘要和核心要点，完整内容请前往原公众号阅读。
                      点击下方按钮可查看更多相关文章。
                    </p>
                  </div>
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
                        {Math.floor(article.views / 15)} 点赞
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {account && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-800 mb-4">公众号</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={account.avatar}
                    alt={account.name}
                    className="w-14 h-14 rounded-xl object-cover shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">{account.name}</p>
                    <p className="text-sm text-slate-500">
                      {(account.followerCount / 10000).toFixed(1)}万 关注
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {account.description}
                </p>
                <button
                  onClick={() => navigate(`/wechat?account=${account.id}`)}
                  className="w-full py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  查看更多该公众号文章
                </button>
              </div>
            )}

            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-800 mb-4">相关推荐</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <div
                      key={related.id}
                      onClick={() => navigate(`/wechat/${related.id}`)}
                      className="group cursor-pointer"
                    >
                      <h4 className="text-sm font-medium text-slate-700 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
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
                  onClick={() => navigate('/wechat')}
                  className="w-full mt-4 pt-4 border-t border-slate-100 text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center justify-center gap-1"
                >
                  查看更多
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-semibold mb-2">公众号聚合</h3>
              <p className="text-sm text-white/80 mb-4">
                汇聚介入医学领域优质公众号内容，一站式获取行业最新动态
              </p>
              <button
                onClick={() => navigate('/wechat')}
                className="w-full py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm"
              >
                浏览全部公众号
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
