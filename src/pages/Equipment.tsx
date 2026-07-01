import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MonitorSmartphone, ChevronRight, X, Check, ArrowLeftRight, Cpu, Zap, Layers, ShieldCheck } from 'lucide-react';
import { equipments, brands } from '../data/mockData';
import type { Equipment } from '../types';

const brandColors: Record<string, string> = {
  '飞利浦': 'from-blue-500 to-cyan-500',
  '西门子': 'from-indigo-500 to-blue-500',
  '联影': 'from-emerald-500 to-teal-500',
  'GE医疗': 'from-sky-500 to-blue-500',
  '东芝': 'from-orange-500 to-amber-500',
  '东软': 'from-purple-500 to-violet-500',
};

export default function Equipment() {
  const navigate = useNavigate();
  const params = useParams<{ brand?: string }>();
  const [selectedBrand, setSelectedBrand] = useState<string>(params.brand || '全部');
  const [compareList, setCompareList] = useState<Equipment[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const filteredEquipments = useMemo(() => {
    if (selectedBrand === '全部') return equipments;
    return equipments.filter((e) => e.brand === selectedBrand);
  }, [selectedBrand]);

  const availableBrands = useMemo(() => {
    const brandSet = new Set(equipments.map((e) => e.brand));
    return ['全部', ...brands.filter((b) => brandSet.has(b))];
  }, []);

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
    if (brand === '全部') {
      navigate('/equipment');
    } else {
      navigate(`/equipment/brand/${brand}`);
    }
  };

  const toggleCompare = (equip: Equipment) => {
    setCompareList((prev) => {
      const exists = prev.find((e) => e.id === equip.id);
      if (exists) {
        return prev.filter((e) => e.id !== equip.id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, equip];
    });
  };

  const isInCompare = (id: string) => compareList.some((e) => e.id === id);

  const allParameters = useMemo(() => {
    const params = new Set<string>();
    compareList.forEach((equip) => {
      Object.keys(equip.parameters).forEach((key) => params.add(key));
    });
    return Array.from(params);
  }, [compareList]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
              <MonitorSmartphone className="w-4 h-4 text-cyan-400" />
              <span>医疗设备资料库</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              介入影像设备大全
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              汇集全球主流品牌DSA设备，提供详细参数对比，助您选择最适合的介入影像解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Brand Tabs */}
      <section className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {availableBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandClick(brand)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedBrand === brand
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {brand}
                {brand !== '全部' && (
                  <span className="ml-1.5 text-xs opacity-80">
                    ({equipments.filter((e) => e.brand === brand).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="sticky top-[73px] z-10 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-slate-700">对比列表</span>
                </div>
                <div className="flex items-center gap-2">
                  {compareList.map((equip) => (
                    <div
                      key={equip.id}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <span className="text-sm text-blue-700 font-medium truncate max-w-[150px]">
                        {equip.model}
                      </span>
                      <button
                        onClick={() => toggleCompare(equip)}
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {compareList.length < 3 && (
                    <span className="text-sm text-slate-400">
                      还可添加 {3 - compareList.length} 个设备
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCompareList([])}
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  清空
                </button>
                <button
                  onClick={() => setShowCompare(true)}
                  disabled={compareList.length < 2}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    compareList.length >= 2
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  开始对比
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Equipment Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">
                {selectedBrand === '全部' ? '全部设备' : `${selectedBrand} 设备`}
              </h2>
              <p className="text-slate-500">共 {filteredEquipments.length} 款设备</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipments.map((equip) => (
              <div
                key={equip.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 group"
              >
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={equip.images[0]}
                    alt={equip.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${brandColors[equip.brand] || 'from-slate-500 to-slate-600'} shadow-lg`}>
                      {equip.brand}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleCompare(equip)}
                    className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isInCompare(equip.id)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110'
                        : 'bg-white/90 text-slate-600 hover:bg-white hover:text-blue-600 shadow-md'
                    }`}
                  >
                    {isInCompare(equip.id) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-lg font-light">+</span>
                    )}
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <p className="text-xs text-blue-600 font-medium mb-1">{equip.model}</p>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {equip.name}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {equip.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-xs text-slate-600 truncate">
                        {equip.parameters['探测器类型'] || '高端探测器'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-xs text-slate-600 truncate">
                        {equip.parameters['探测器尺寸'] || '标准尺寸'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-xs text-slate-600 truncate">
                        {equip.parameters['空间分辨率'] || '高分辨率'}
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs text-slate-400 mb-2">核心特性</p>
                    <div className="flex flex-wrap gap-1.5">
                      {equip.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs bg-slate-50 text-slate-600 rounded border border-slate-100"
                        >
                          {feature.length > 12 ? feature.slice(0, 12) + '...' : feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>发布于 {equip.releaseDate}</span>
                    </div>
                    <button
                      onClick={() => navigate(`/equipment/detail/${equip.id}`)}
                      className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn"
                    >
                      查看详情
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Modal */}
      {showCompare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <ArrowLeftRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">设备参数对比</h2>
                  <p className="text-sm text-slate-500">{compareList.length} 款设备对比分析</p>
                </div>
              </div>
              <button
                onClick={() => setShowCompare(false)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-50 to-blue-50">
                      <th className="sticky left-0 bg-gradient-to-r from-slate-50 to-blue-50 text-left px-4 py-3 text-sm font-semibold text-slate-700 border-b border-slate-200 min-w-[140px] z-10">
                        参数项
                      </th>
                      {compareList.map((equip) => (
                        <th
                          key={equip.id}
                          className="text-center px-4 py-3 border-b border-slate-200 min-w-[200px]"
                        >
                          <div className="flex flex-col items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${brandColors[equip.brand] || 'from-slate-500 to-slate-600'}`}>
                              {equip.brand}
                            </span>
                            <span className="font-bold text-slate-800 text-base">{equip.model}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50/50">
                      <td className="sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10">
                        设备名称
                      </td>
                      {compareList.map((equip) => (
                        <td key={equip.id} className="text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100">
                          {equip.name}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10">
                        发布时间
                      </td>
                      {compareList.map((equip) => (
                        <td key={equip.id} className="text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100">
                          {equip.releaseDate}
                        </td>
                      ))}
                    </tr>
                    {allParameters.map((param, idx) => (
                      <tr key={param} className={idx % 2 === 0 ? 'bg-slate-50/30 hover:bg-slate-50/60' : 'hover:bg-slate-50/50'}>
                        <td className="sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10">
                          {param}
                        </td>
                        {compareList.map((equip) => (
                          <td key={equip.id} className="text-center px-4 py-3 text-sm text-slate-700 border-b border-slate-100">
                            {equip.parameters[param] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="hover:bg-slate-50/50">
                      <td className="sticky left-0 bg-white text-left px-4 py-3 text-sm font-medium text-slate-600 border-b border-slate-100 z-10 align-top">
                        核心特性
                      </td>
                      {compareList.map((equip) => (
                        <td key={equip.id} className="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 align-top">
                          <ul className="space-y-1.5">
                            {equip.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => setShowCompare(false)}
                className="px-5 py-2.5 rounded-lg font-medium text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
