import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ChevronRight, Clock, TrendingUp, LayoutGrid, List, BookOpen } from 'lucide-react';
import { techArticles, techCategories } from '../data/mockData';
import type { TechArticle } from '../types';
import TechCard from '../components/business/TechCard';

type SortType = 'time' | 'views';
type ViewMode = 'list' | 'grid';

export default function Technology() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortType>('time');
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const filteredArticles = useMemo(() => {
    let result = [...techArticles];

    if (activeCategory !== 'all') {
      const categoryName = techCategories.find(c => c.id === activeCategory)?.name;
      if (categoryName) {
        result = result.filter(article => article.category === categoryName);
      }
    }

    if (sortBy === 'time') {
      result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } else {
      result.sort((a, b) => b.views - a.views);
    }

    return result;
  }, [activeCategory, sortBy]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return techArticles.length;
    const categoryName = techCategories.find(c => c.id === categoryId)?.name;
    if (!categoryName) return 0;
    return techArticles.filter(a => a.category === categoryName).length;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              首页
            </button>
            <ChevronRight className="w-4 h-4" />
            <span>技术库</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">介入影像技术库</h1>
              <p className="text-blue-100 mt-1">全面的介入影像技术资料，助您提升专业水平</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Category Tabs */}
        <div className="lg:hidden mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              全部
              <span className="ml-1 text-xs opacity-75">({getCategoryCount('all')})</span>
            </button>
            {techCategories.slice(0, 6).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                {category.name}
                <span className="ml-1 text-xs opacity-75">({getCategoryCount(category.id)})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 sticky top-24">
              <div className="p-5 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-blue-600" />
                  技术分类
                </h3>
              </div>
              <div className="p-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all mb-1 ${
                    activeCategory === 'all'
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>全部技术</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategory === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {getCategoryCount('all')}
                    </span>
                  </div>
                </button>
                {techCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all mb-1 ${
                      activeCategory === category.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {getCategoryCount(category.id)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>共找到</span>
                  <span className="font-semibold text-blue-600">{filteredArticles.length}</span>
                  <span>篇文章</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                    <button
                      onClick={() => setSortBy('time')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                        sortBy === 'time'
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      最新
                    </button>
                    <button
                      onClick={() => setSortBy('views')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                        sortBy === 'views'
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      <TrendingUp className="w-4 h-4" />
                      热度
                    </button>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-md transition-all ${
                        viewMode === 'list'
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-md transition-all ${
                        viewMode === 'grid'
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles List */}
            {filteredArticles.length > 0 ? (
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <TechCard
                    key={article.id}
                    article={article}
                    onClick={() => navigate(`/technology/${article.id}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-700 mb-2">暂无相关文章</h3>
                <p className="text-sm text-slate-500 mb-4">该分类下暂无技术文章，请尝试其他分类</p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  查看全部文章 →
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredArticles.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 text-sm transition-colors">
                    上一页
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 text-sm transition-colors">
                    下一页
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
