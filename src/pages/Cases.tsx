import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, ChevronDown, FileText, Stethoscope, Cpu, Activity, MonitorSmartphone } from 'lucide-react';
import { cases } from '../data/mockData';
import type { CaseItem } from '../types';
import CaseCard from '../components/business/CaseCard';

const departments = ['全部科室', '心血管内科', '神经外科', '血管外科', '介入科', '心血管外科'];
const technologies = ['全部技术', '冠状动脉造影', '脑血管造影', '外周血管造影', '肿瘤介入', '大血管介入'];
const difficulties = ['全部难度', '初级', '中级', '高级'];
const brands = ['全部品牌', '飞利浦', '西门子', '联影', 'GE医疗'];

export default function Cases() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('全部科室');
  const [selectedTechnology, setSelectedTechnology] = useState('全部技术');
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部难度');
  const [selectedBrand, setSelectedBrand] = useState('全部品牌');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showTechnologyDropdown, setShowTechnologyDropdown] = useState(false);
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const filteredCases = useMemo(() => {
    return cases.filter((caseItem: CaseItem) => {
      const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === '全部科室' || caseItem.department === selectedDepartment;
      const matchesTechnology = selectedTechnology === '全部技术' || caseItem.technology === selectedTechnology;
      const matchesDifficulty = selectedDifficulty === '全部难度' || caseItem.difficulty === selectedDifficulty;
      const matchesBrand = selectedBrand === '全部品牌' || caseItem.equipmentBrand === selectedBrand;
      return matchesSearch && matchesDepartment && matchesTechnology && matchesDifficulty && matchesBrand;
    });
  }, [searchTerm, selectedDepartment, selectedTechnology, selectedDifficulty, selectedBrand]);

  const resetFilters = () => {
    setSelectedDepartment('全部科室');
    setSelectedTechnology('全部技术');
    setSelectedDifficulty('全部难度');
    setSelectedBrand('全部品牌');
    setSearchTerm('');
  };

  const hasActiveFilters = selectedDepartment !== '全部科室' ||
    selectedTechnology !== '全部技术' ||
    selectedDifficulty !== '全部难度' ||
    selectedBrand !== '全部品牌' ||
    searchTerm !== '';

  const DropdownButton = ({
    label,
    value,
    isOpen,
    onClick,
    icon: Icon,
  }: {
    label: string;
    value: string;
    isOpen: boolean;
    onClick: () => void;
    icon: React.ElementType;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
        value !== label
          ? 'border-blue-300 bg-blue-50 text-blue-700'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{value}</span>
      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );

  const DropdownMenu = ({
    options,
    selected,
    onSelect,
    isOpen,
  }: {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
    isOpen: boolean;
  }) => (
    isOpen ? (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-20 max-h-64 overflow-y-auto">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
              selected === option
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    ) : null
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative pt-20 lg:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>临床病例中心</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              临床病例中心
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              汇集多学科临床介入病例，涵盖心血管、神经、外周血管、肿瘤等领域，
              为临床医师提供真实病例参考与学习资源
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索病例标题、诊断、摘要..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all text-slate-700 placeholder-slate-400"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-slate-500">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">筛选：</span>
              </div>

              <div className="relative">
                <DropdownButton
                  label="全部科室"
                  value={selectedDepartment}
                  isOpen={showDepartmentDropdown}
                  onClick={() => {
                    setShowDepartmentDropdown(!showDepartmentDropdown);
                    setShowTechnologyDropdown(false);
                    setShowDifficultyDropdown(false);
                    setShowBrandDropdown(false);
                  }}
                  icon={Stethoscope}
                />
                <DropdownMenu
                  options={departments}
                  selected={selectedDepartment}
                  onSelect={(value) => {
                    setSelectedDepartment(value);
                    setShowDepartmentDropdown(false);
                  }}
                  isOpen={showDepartmentDropdown}
                />
              </div>

              <div className="relative">
                <DropdownButton
                  label="全部技术"
                  value={selectedTechnology}
                  isOpen={showTechnologyDropdown}
                  onClick={() => {
                    setShowTechnologyDropdown(!showTechnologyDropdown);
                    setShowDepartmentDropdown(false);
                    setShowDifficultyDropdown(false);
                    setShowBrandDropdown(false);
                  }}
                  icon={Cpu}
                />
                <DropdownMenu
                  options={technologies}
                  selected={selectedTechnology}
                  onSelect={(value) => {
                    setSelectedTechnology(value);
                    setShowTechnologyDropdown(false);
                  }}
                  isOpen={showTechnologyDropdown}
                />
              </div>

              <div className="relative">
                <DropdownButton
                  label="全部难度"
                  value={selectedDifficulty}
                  isOpen={showDifficultyDropdown}
                  onClick={() => {
                    setShowDifficultyDropdown(!showDifficultyDropdown);
                    setShowDepartmentDropdown(false);
                    setShowTechnologyDropdown(false);
                    setShowBrandDropdown(false);
                  }}
                  icon={Activity}
                />
                <DropdownMenu
                  options={difficulties}
                  selected={selectedDifficulty}
                  onSelect={(value) => {
                    setSelectedDifficulty(value);
                    setShowDifficultyDropdown(false);
                  }}
                  isOpen={showDifficultyDropdown}
                />
              </div>

              <div className="relative">
                <DropdownButton
                  label="全部品牌"
                  value={selectedBrand}
                  isOpen={showBrandDropdown}
                  onClick={() => {
                    setShowBrandDropdown(!showBrandDropdown);
                    setShowDepartmentDropdown(false);
                    setShowTechnologyDropdown(false);
                    setShowDifficultyDropdown(false);
                  }}
                  icon={MonitorSmartphone}
                />
                <DropdownMenu
                  options={brands}
                  selected={selectedBrand}
                  onSelect={(value) => {
                    setSelectedBrand(value);
                    setShowBrandDropdown(false);
                  }}
                  isOpen={showBrandDropdown}
                />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="ml-auto text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  重置筛选
                </button>
              )}
            </div>

            {/* Result Count */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                共找到 <span className="font-semibold text-slate-700">{filteredCases.length}</span> 个病例
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem: CaseItem) => (
                <CaseCard
                  key={caseItem.id}
                  caseData={caseItem}
                  onClick={() => navigate(`/cases/${caseItem.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">暂无匹配的病例</h3>
              <p className="text-slate-500 mb-6">请尝试调整筛选条件或搜索关键词</p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                重置筛选条件
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
