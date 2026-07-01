import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, FileText, MonitorSmartphone, Users, Newspaper, ChevronRight, TrendingUp, Award, Zap } from 'lucide-react';
import { techArticles, cases, equipments, experts, wechatArticles, brands } from '../data/mockData';
import TechCard from '../components/business/TechCard';
import CaseCard from '../components/business/CaseCard';
import WechatCard from '../components/business/WechatCard';

const stats = [
  { label: '技术文章', value: '1,286', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
  { label: '临床病例', value: '892', icon: FileText, color: 'from-emerald-500 to-teal-500' },
  { label: '设备资料', value: '156', icon: MonitorSmartphone, color: 'from-orange-500 to-amber-500' },
  { label: '专家学者', value: '328', icon: Users, color: 'from-rose-500 to-pink-500' },
];

const quickEntries = [
  { name: 'DSA技术', desc: '数字减影血管造影', color: 'bg-blue-50 text-blue-600' },
  { name: '神经介入', desc: '脑血管疾病诊疗', color: 'bg-purple-50 text-purple-600' },
  { name: '心脏介入', desc: '冠心病心律失常', color: 'bg-rose-50 text-rose-600' },
  { name: '肿瘤介入', desc: 'TACE消融治疗', color: 'bg-emerald-50 text-emerald-600' },
  { name: '外周介入', desc: '血管疾病治疗', color: 'bg-orange-50 text-orange-600' },
  { name: '综合介入', desc: '非血管介入', color: 'bg-cyan-50 text-cyan-600' },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const navigate = useNavigate();

  useEffect(() => {
    const targets = stats.map((s) => parseInt(s.value.replace(',', '')));
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setAnimatedStats(targets.map((t) => Math.floor(t * easeOut)));
      if (currentStep >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>专业介入影像知识平台</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              探索介入影像技术
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                助力精准医疗发展
              </span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              汇聚DSA技术、临床病例、厂商设备、专家观点，打造介入医学影像领域最专业的知识交流平台
            </p>

            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
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

            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-white/50 text-sm">热门搜索：</span>
              {['DSA', '冠脉介入', '神经介入', 'TACE', '支架技术'].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(keyword)}`);
                  }}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors border border-white/10"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">
                    {formatNumber(animatedStats[index])}
                    <span className="text-lg">+</span>
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Entries */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">快速入口</h2>
              <p className="text-slate-500">按技术分类快速找到您需要的内容</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickEntries.map((entry) => (
              <button
                key={entry.name}
                onClick={() => navigate('/technology')}
                className="p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-left group border border-slate-100 hover:border-blue-200"
              >
                <div className={`w-12 h-12 rounded-lg ${entry.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">{entry.name}</h3>
                <p className="text-xs text-slate-500">{entry.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">厂商专区</h2>
              <p className="text-slate-500">主流DSA设备品牌产品资料与技术对比</p>
            </div>
            <button
              onClick={() => navigate('/equipment')}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => navigate(`/equipment/${brand}`)}
                className="p-6 bg-slate-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-center group border border-slate-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                  <span className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {brand.charAt(0)}
                  </span>
                </div>
                <h3 className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  {brand}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tech Articles */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                <TrendingUp className="w-6 h-6 inline-block mr-2 text-blue-600" />
                最新技术文章
              </h2>
              <p className="text-slate-500">介入影像领域最新技术进展与研究成果</p>
            </div>
            <button
              onClick={() => navigate('/technology')}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {techArticles.slice(0, 4).map((article) => (
              <TechCard
                key={article.id}
                article={article}
                onClick={() => navigate(`/technology/${article.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">精选病例</h2>
              <p className="text-slate-500">真实临床病例分享，助力诊疗水平提升</p>
            </div>
            <button
              onClick={() => navigate('/cases')}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.slice(0, 3).map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                caseData={caseItem}
                onClick={() => navigate(`/cases/${caseItem.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">专家专栏</h2>
              <p className="text-slate-500">领域知名专家最新观点与学术论文</p>
            </div>
            <button
              onClick={() => navigate('/experts')}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.slice(0, 3).map((expert) => (
              <div
                key={expert.id}
                onClick={() => navigate(`/experts/${expert.id}`)}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-lg">{expert.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{expert.title}</p>
                    <p className="text-sm text-slate-500 truncate">{expert.hospital}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 line-clamp-2 mb-4">{expert.bio}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">
                    发表文章 <span className="font-semibold text-slate-700">{expert.articleCount}</span> 篇
                  </span>
                  <span className="text-blue-600 text-sm font-medium">查看主页 →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wechat Articles */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                <Newspaper className="w-6 h-6 inline-block mr-2 text-green-600" />
                公众号精选
              </h2>
              <p className="text-slate-500">行业公众号优质内容聚合更新</p>
            </div>
            <button
              onClick={() => navigate('/wechat')}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wechatArticles.slice(0, 4).map((article) => (
              <WechatCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">热门设备</h2>
            <p className="text-white/60">各大品牌旗舰DSA设备详细介绍</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.slice(0, 3).map((equip) => (
              <div
                key={equip.id}
                onClick={() => navigate('/equipment')}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={equip.images[0]}
                    alt={equip.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-xs bg-blue-500/30 text-blue-200">
                      {equip.brand}
                    </span>
                    <span className="text-xs text-white/50">{equip.model}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {equip.name}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2">{equip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
