import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Eye, Calendar, ChevronRight, Building2, Stethoscope } from 'lucide-react';
import { experts, expertArticles } from '../data/mockData';
import type { Expert, ExpertArticle } from '../types';

export default function Experts() {
  const [selectedExpertId, setSelectedExpertId] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredArticles = selectedExpertId
    ? expertArticles.filter((a) => a.expertId === selectedExpertId)
    : expertArticles;

  const selectedExpert = experts.find((e) => e.id === selectedExpertId);

  const getExpertName = (expertId: string) => {
    const expert = experts.find((e) => e.id === expertId);
    return expert?.name || '';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
              <Users className="w-4 h-4" />
              <span>专家智库</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              专家文章
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              汇聚介入医学领域顶尖专家的学术观点与研究成果，助力临床诊疗水平提升
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
                <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <h2 className="font-bold text-lg flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    专家列表
                  </h2>
                  <p className="text-sm text-white/70 mt-1">共 {experts.length} 位专家</p>
                </div>

                <div className="p-2">
                  <button
                    onClick={() => setSelectedExpertId(null)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 mb-1 ${
                      selectedExpertId === null
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">全部专家文章</span>
                      <span className={`text-sm ${selectedExpertId === null ? 'text-blue-600' : 'text-slate-400'}`}>
                        {expertArticles.length} 篇
                      </span>
                    </div>
                  </button>

                  {experts.map((expert) => (
                    <button
                      key={expert.id}
                      onClick={() => setSelectedExpertId(expert.id)}
                      className={`w-full px-4 py-3 rounded-xl text-left transition-all duration-200 mb-1 ${
                        selectedExpertId === expert.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={expert.avatar}
                          alt={expert.name}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm truncate">{expert.name}</div>
                          <div className={`text-xs truncate ${selectedExpertId === expert.id ? 'text-blue-600' : 'text-slate-500'}`}>
                            {expert.title}
                          </div>
                          <div className="text-xs text-slate-400 truncate">{expert.hospital}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <main className="flex-1 min-w-0">
              {selectedExpert && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src={selectedExpert.avatar}
                      alt={selectedExpert.name}
                      className="w-24 h-24 rounded-2xl object-cover flex-shrink-0 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h2 className="text-2xl font-bold text-slate-800">{selectedExpert.name}</h2>
                          <p className="text-blue-600 font-medium mt-1">{selectedExpert.title}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-800">{selectedExpert.articleCount}</div>
                          <div className="text-sm text-slate-500">发表文章</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          {selectedExpert.hospital}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Stethoscope className="w-4 h-4 text-slate-400" />
                          {selectedExpert.department}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{selectedExpert.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  {selectedExpert ? `${selectedExpert.name} 的文章` : '全部专家文章'}
                  <span className="text-base font-normal text-slate-500">({filteredArticles.length})</span>
                </h2>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">暂无相关文章</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => navigate(`/experts/article/${article.id}`)}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 cursor-pointer border border-slate-100 hover:border-blue-200 group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.summary}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          {!selectedExpert && (
                            <span className="flex items-center gap-1.5 text-blue-600 font-medium">
                              <Users className="w-4 h-4" />
                              {getExpertName(article.expertId)}
                            </span>
                          )}
                          <span className="flex items-center gap-1.5 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            {article.publishDate}
                          </span>
                        </div>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()} 阅读
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
