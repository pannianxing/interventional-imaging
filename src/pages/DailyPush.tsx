import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  FileText,
  BookOpen,
  TrendingUp,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { dailyPushes } from '../data/mockData';
import type { DailyPush } from '../types';

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
    } else if (line.startsWith('---')) {
      elements.push(<hr key={key++} className="my-6 border-slate-200" />);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="text-slate-700 font-semibold leading-relaxed mb-4">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('- **')) {
      elements.push(
        <p key={key++} className="text-slate-600 leading-relaxed mb-2 ml-4">
          <span className="font-semibold">{line.replace(/^- \*\*/, '').replace(/\*\*:?/, '：')}</span>
        </p>
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
            <li key={idx}>{item.replace(/\*\*/g, '')}</li>
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
            <li key={idx}>{item.replace(/\*\*/g, '')}</li>
          ))}
        </ol>
      );
    } else if (line.trim() !== '') {
      elements.push(
        <p key={key++} className="text-slate-600 leading-relaxed mb-4">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else {
      elements.push(<div key={key++} className="h-3" />);
    }
  }

  return elements;
};

export default function DailyPushList() {
  const navigate = useNavigate();
  const [selectedPush, setSelectedPush] = useState<DailyPush | null>(null);

  const sortedPushes = useMemo(() => {
    return [...dailyPushes].sort((a, b) => b.date.localeCompare(a.date));
  }, []);

  if (selectedPush) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedPush(null)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>返回推送列表</span>
          </button>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                {selectedPush.date}
              </span>
              <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                {selectedPush.consensusCount}篇共识
              </span>
              <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
                {selectedPush.newsCount}条动态
              </span>
            </div>
            <div className="prose prose-slate max-w-none mt-4">
              {renderMarkdown(selectedPush.content)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            介入放射学每日推送
          </h1>
          <p className="text-slate-500">
            每日推送最新的介入放射学专家共识与行业知识，涵盖肝癌介入、神经介入、冠脉介入、外周血管介入等多个亚专业领域
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {sortedPushes.map((push) => (
            <div
              key={push.id}
              onClick={() => setSelectedPush(push)}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-1.5 text-sm text-slate-400">
                      <Calendar size={14} />
                      {push.date}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
                      <BookOpen size={12} />
                      {push.consensusCount}篇专家共识
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 text-xs rounded-full">
                      <TrendingUp size={12} />
                      {push.newsCount}条行业动态
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {push.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {push.summary}
                  </p>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <FileText size={18} className="text-blue-500" />
            <h3 className="font-semibold text-blue-800">关于每日推送</h3>
          </div>
          <p className="text-blue-600 text-sm leading-relaxed">
            本栏目每日由AI助手搜索并筛选介入放射学领域最新专家共识、临床指南和行业动态，经多重交叉验证后推送。每篇内容均标注原始来源和发布日期，并附自检通过标记（权威性、时效性、相关性、去重）。推送时间为每日上午9:00（北京时间）。
          </p>
        </div>
      </div>
    </div>
  );
}