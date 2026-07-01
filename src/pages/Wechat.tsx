import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Newspaper, Users, Calendar, Check } from 'lucide-react';
import { wechatAccounts, wechatArticles } from '../data/mockData';
import WechatCard from '../components/business/WechatCard';

export default function Wechat() {
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredArticles = selectedAccountId
    ? wechatArticles.filter((a) => a.accountId === selectedAccountId)
    : wechatArticles;

  const selectedAccount = wechatAccounts.find((a) => a.id === selectedAccountId);

  const formatFollowerCount = (count: number) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}万`;
    }
    return count.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
              <Newspaper className="w-4 h-4" />
              <span>公众号聚合</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              公众号精选
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              汇聚介入医学领域优质公众号内容，一站式获取行业最新动态与学术进展
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              优质公众号
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <button
                onClick={() => setSelectedAccountId(null)}
                className={`p-5 rounded-xl text-left transition-all duration-300 group ${
                  selectedAccountId === null
                    ? 'bg-emerald-50 border-2 border-emerald-300 shadow-md'
                    : 'bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  selectedAccountId === null
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                }`}>
                  <Newspaper className="w-6 h-6" />
                </div>
                <h3 className={`font-semibold text-sm mb-1 transition-colors ${
                  selectedAccountId === null ? 'text-emerald-700' : 'text-slate-800 group-hover:text-emerald-600'
                }`}>
                  全部公众号
                </h3>
                <p className="text-xs text-slate-500">
                  共 {wechatArticles.length} 篇文章
                </p>
              </button>

              {wechatAccounts.map((account) => (
                <button
                  key={account.id}
                  onClick={() => setSelectedAccountId(account.id)}
                  className={`p-5 rounded-xl text-left transition-all duration-300 group relative ${
                    selectedAccountId === account.id
                      ? 'bg-emerald-50 border-2 border-emerald-300 shadow-md'
                      : 'bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md'
                  }`}
                >
                  {selectedAccountId === account.id && (
                    <div className="absolute top-3 right-3 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <img
                    src={account.avatar}
                    alt={account.name}
                    className="w-12 h-12 rounded-xl object-cover mb-3 border-2 border-white shadow-sm"
                  />
                  <h3 className={`font-semibold text-sm mb-1 truncate transition-colors ${
                    selectedAccountId === account.id ? 'text-emerald-700' : 'text-slate-800 group-hover:text-emerald-600'
                  }`}>
                    {account.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {formatFollowerCount(account.followerCount)} 关注
                  </p>
                </button>
              ))}
            </div>
          </div>

          {selectedAccount && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={selectedAccount.avatar}
                  alt={selectedAccount.name}
                  className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">{selectedAccount.name}</h2>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {formatFollowerCount(selectedAccount.followerCount)} 关注
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {selectedAccount.lastUpdate} 更新
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">
                        {filteredArticles.length}
                      </div>
                      <div className="text-sm text-slate-500">收录文章</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    {selectedAccount.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-emerald-600" />
              {selectedAccount ? `${selectedAccount.name} 文章` : '全部文章'}
              <span className="text-base font-normal text-slate-500">({filteredArticles.length})</span>
            </h2>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">暂无相关文章</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArticles.map((article) => (
                <WechatCard
                  key={article.id}
                  article={article}
                  onClick={() => navigate(`/wechat/${article.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
