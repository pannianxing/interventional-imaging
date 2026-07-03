import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  Check,
  Cpu,
  Zap,
  Layers,
  ShieldCheck,
  ArrowLeftRight,
  MonitorSmartphone,
  Calendar,
  ExternalLink,
} from 'lucide-react';
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

export default function EquipmentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [compareList, setCompareList] = useState<Equipment[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const equipment = useMemo<Equipment | undefined>(() => {
    return equipments.find((e) => e.id === id);
  }, [id]);

  const relatedEquipments = useMemo(() => {
    if (!equipment) return [];
    return equipments
      .filter((e) => e.id !== equipment.id && e.brand === equipment.brand)
      .slice(0, 3);
  }, [equipment]);

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

  const isInCompare = (equipId: string) => compareList.some((e) => e.id === equipId);

  const allParameters = useMemo(() => {
    const params = new Set<string>();
    compareList.forEach((equip) => {
      Object.keys(equip.parameters).forEach((key) => params.add(key));
    });
    return Array.from(params);
  }, [compareList]);

  if (!equipment) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-2">设备未找到</h2>
          <p className="text-slate-500 mb-4">您访问的设备不存在或已被移除</p>
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
                <span className="text-slate-600 text-xl">×</span>
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

      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回列表
          </button>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${brandColors[equipment.brand] || 'from-slate-500 to-slate-600'}`}>
              {equipment.brand}
            </span>
            <span className="text-white/70 text-sm">{equipment.model}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {equipment.name}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            {equipment.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <MonitorSmartphone className="w-4 h-4" />
              {equipment.brand}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              发布于 {equipment.releaseDate}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img
                  src={equipment.images[0]}
                  alt={equipment.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                技术参数
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(equipment.parameters).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">{key}</p>
                      <p className="text-sm font-medium text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                核心特性
              </h2>
              <div className="space-y-3">
                {equipment.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">快速操作</h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    toggleCompare(equipment);
                    setShowCompare(true);
                  }}
                  className="w-full py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                  加入对比
                </button>
                <button
                  onClick={() => navigate('/equipment')}
                  className="w-full py-3 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  返回设备列表
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">设备信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">品牌</span>
                  <span className="text-sm font-medium text-slate-700">{equipment.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">型号</span>
                  <span className="text-sm font-medium text-slate-700">{equipment.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">发布时间</span>
                  <span className="text-sm font-medium text-slate-700">{equipment.releaseDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">核心特性</span>
                  <span className="text-sm font-medium text-slate-700">{equipment.features.length} 项</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">参数项</span>
                  <span className="text-sm font-medium text-slate-700">{Object.keys(equipment.parameters).length} 项</span>
                </div>
              </div>
            </div>

            {equipment.sourceName && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-800 text-sm mb-2">信息来源</h4>
                    <p className="text-sm text-amber-700 mb-2">
                      {equipment.sourceName}
                    </p>
                    {equipment.sourceUrl && (
                      <a
                        href={equipment.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                      >
                        查看原文链接
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <p className="text-xs text-amber-600 mt-2">
                      产品信息仅供参考，以厂商官方发布为准
                    </p>
                  </div>
                </div>
              </div>
            )}

            {relatedEquipments.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-800 mb-4">同品牌其他设备</h3>
                <div className="space-y-4">
                  {relatedEquipments.map((related) => (
                    <div
                      key={related.id}
                      onClick={() => navigate(`/equipment/detail/${related.id}`)}
                      className="group cursor-pointer"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                          <img
                            src={related.images[0]}
                            alt={related.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                            {related.name}
                          </h4>
                          <p className="text-xs text-slate-400">{related.model}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate(`/equipment/brand/${equipment.brand}`)}
                  className="w-full mt-4 pt-4 border-t border-slate-100 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1"
                >
                  查看全部
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-semibold mb-2">设备对比</h3>
              <p className="text-sm text-white/80 mb-4">
                与其他品牌DSA设备进行详细参数对比
              </p>
              <button
                onClick={() => navigate('/equipment')}
                className="w-full py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm"
              >
                浏览全部设备
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
