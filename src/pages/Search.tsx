import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Eye, Calendar, Tag, ChevronDown, BookOpen, FileText, MonitorSmartphone, Users, Newspaper } from 'lucide-react';
import { techArticles, cases, equipments, experts, wechatArticles } from '../data/mockData';
import type { SearchCategory, SearchResult } from '../types';

const tabs: { key: SearchCategory; label: string; icon: typeof BookOpen }[] = [
  { key: 'all', label: '全部', icon: SearchIcon },
  { key: 'technology', label: '技术', icon: BookOpen },
  { key: 'cases', label: '病例', icon: FileText },
  { key: 'equipment', label: '设备', icon: MonitorSmartphone },
  { key: 'experts', label: '专家', icon: Users },
  { key: 'wechat', label: '公众号', icon: Newspaper },
];

const sortOptions = [
  { key: 'relevance', label: '相关度' },
  { key: 'time', label: '时间' },
  { key: 'hot', label: '热度' },
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const keyword = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState<SearchCategory>('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState(keyword);

  const allResults = useMemo<SearchResult[]>(() => {
    if (!keyword.trim()) return [];
    const kw = keyword.toLowerCase();
    const results: SearchResult[] = [];

    techArticles.forEach((article) => {
      const relevance =
        (article.title.toLowerCase().includes(kw) ? 3 : 0) +
        (article.summary.toLowerCase().includes(kw) ? 2 : 0) +
        (article.tags.some((t) => t.toLowerCase().includes(kw)) ? 1.5 : 0) +
        (article.content.toLowerCase().includes(kw) ? 1 : 0);
      if (relevance > 0) {
        results.push({
          type: 'technology',
          id: article.id,
          title: article.title,
          summary: article.summary,
          date: article.publishDate,
          views: article.views,
          extra: article.author,
        });
      }
    });

    cases.forEach((caseItem) => {
      const relevance =
        (caseItem.title.toLowerCase().includes(kw) ? 3 : 0) +
        (caseItem.summary.toLowerCase().includes(kw) ? 2 : 0) +
        (caseItem.department.toLowerCase().includes(kw) ? 1.5 : 0) +
        (caseItem.diagnosis.toLowerCase().includes(kw) ? 1 : 0);
      if (relevance > 0) {
        results.push({
          type: 'cases',
          id: caseItem.id,
          title: caseItem.title,
          summary: caseItem.summary,
          date: caseItem.publishDate,
          views: caseItem.views,
          extra: caseItem.department,
        });
      }
    });

    equipments.forEach((equip) => {
      const relevance =
        (equip.name.toLowerCase().includes(kw) ? 3 : 0) +
        (equip.brand.toLowerCase().includes(kw) ? 2 : 0) +
        (equip.model.toLowerCase().includes(kw) ? 2 : 0) +
        (equip.description.toLowerCase().includes(kw) ? 1 : 0);
      if (relevance > 0) {
        results.push({
          type: 'equipment',
          id: equip.id,
          title: equip.name,
          summary: equip.description,
          date: equip.releaseDate,
          extra: `${equip.brand} · ${equip.model}`,
        });
      }
    });

    experts.forEach((expert) => {
      const relevance =
        (expert.name.toLowerCase().includes(kw) ? 3 : 0) +
        (expert.hospital.toLowerCase().includes(kw) ? 2 : 0) +
        (expert.department.toLowerCase().includes(kw) ? 2 : 0) +
        (expert.title.toLowerCase().includes(kw) ? 1.5 : 0) +
        (expert.bio.toLowerCase().includes(kw) ? 1 : 0);
      if (relevance > 0) {
        results.push({
          type: 'experts',
          id: expert.id,
          title: expert.name,
          summary: expert.bio,
          date: '',
          views: expert.articleCount,
          extra: `${expert.hospital} · ${expert.department}`,
        });
      }
    });

    wechatArticles.forEach((article) => {
      const relevance =
        (article.title.toLowerCase().includes(kw) ? 3 : 0) +
        (article.summary.toLowerCase().includes(kw) ? 2 : 0) +
        (article.accountName.toLowerCase().includes(kw) ? 1.5 : 0) +
        (article.category.toLowerCase().includes(kw) ? 1 : 0);
      if (relevance > 0) {
        results.push({
          type: 'wechat',
          id: article.id,
          title: article.title,
          summary: article.summary,
          date: article.publishDate,
          views: article.views,
          extra: article.accountName,
        });
      }
    });

    return results;
  }, [keyword]);

  const filteredResults = useMemo(() => {
    let filtered = activeTab === 'all' ? allResults : allResults.filter((r) => r.type === activeTab);

    if (sortBy === 'time') {
      filtered = [...filtered].sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    } else if (sortBy === 'hot') {
      filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0));
    }

    return filtered;
  }, [allResults, activeTab, sortBy]);

  const tabCounts = useMemo(() => {
    const counts: Record<SearchCategory, number> = {
      all: allResults.length,
      technology: allResults.filter((r) => r.type === 'technology').length,
      cases: allResults.filter((r) => r.type === 'cases').length,
      equipment: allResults.filter((r) => r.type === 'equipment').length,
      experts: allResults.filter((r) => r.type === 'experts').length,
      wechat: allResults.filter((r) => r.type === 'wechat').length,
    };
    return counts;
  }, [allResults]);

  const highlightKeyword = (text: string) => {
    if (!keyword.trim()) return text;
    const parts = text.split(new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={index} className="text-blue-600 font-semibold bg-blue-50 px-0.5 rounded">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    }
  };

  const getTypeLabel = (type: SearchCategory) => {
    const tab = tabs.find((t) => t.key === type);
    return tab?.label || '';
  };

  const getTypeColor = (type: SearchCategory) => {
    const colors: Record<SearchCategory, string> = {
      all: 'bg-slate-100 text-slate-600',
      technology: 'bg-blue-100 text-blue-700',
      cases: 'bg-emerald-100 text-emerald-700',
      equipment: 'bg-orange-100 text-orange-700',
      experts: 'bg-rose-100 text-rose-700',
      wechat: 'bg-green-100 text-green-700',
    };
    return colors[type];
  };

  const handleResultClick = (result: SearchResult) => {
    switch (result.type) {
      case 'technology':
        navigate(`/technology/${result.id}`);
        break;
      case 'cases':
        navigate(`/cases/${result.id}`);
        break;
      case 'equipment':
        navigate(`/equipment`);
        break;
      case 'experts':
        navigate(`/experts/${result.id}`);
        break;
      case 'wechat':
        navigate(`/wechat/${result.id}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">搜索结果</h1>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="搜索技术文章、临床病例、设备资料、专家论文..."
                className="w-full pl-14 pr-32 py-4 rounded-full text-base bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 text-slate-700 placeholder-slate-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                搜索
              </button>
            </div>
          </form>
          {keyword && (
            <p className="text-white/60 text-sm mt-4 text-center">
              找到 <span className="text-cyan-400 font-semibold">{allResults.length}</span> 个相关结果
            </p>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 mb-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === tab.key
                      ? 'text-blue-600 border-blue-600 bg-blue-50/50'
                      : 'text-slate-500 border-transparent hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      activeTab === tab.key ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tabCounts[tab.key]}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative px-5">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
              >
                排序：{sortOptions.find((o) => o.key === sortBy)?.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showSortDropdown && (
                <div className="absolute right-5 top-full mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg z-10 overflow-hidden">
                  {sortOptions.map((option) => (
                    <button
                      key={option.key}
                      onClick={() => {
                        setSortBy(option.key);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-slate-50 ${
                        sortBy === option.key ? 'text-blue-600 bg-blue-50' : 'text-slate-600'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {filteredResults.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 py-20 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <SearchIcon className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              {keyword ? '未找到相关结果' : '请输入搜索关键词'}
            </h3>
            <p className="text-slate-500 text-sm">
              {keyword ? '试试其他关键词，或浏览我们的分类内容' : '在上方搜索框中输入您想查找的内容'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredResults.map((result) => (
              <div
                key={`${result.type}-${result.id}`}
                onClick={() => handleResultClick(result)}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 cursor-pointer border border-slate-100 hover:border-blue-200 group"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                    {getTypeLabel(result.type)}
                  </span>
                  {result.extra && (
                    <span className="text-sm text-slate-500">{result.extra}</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {highlightKeyword(result.title)}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {highlightKeyword(result.summary)}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  {result.views !== undefined && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {result.views.toLocaleString()}
                      {result.type === 'experts' ? ' 篇文章' : ' 次浏览'}
                    </span>
                  )}
                  {result.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {result.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
