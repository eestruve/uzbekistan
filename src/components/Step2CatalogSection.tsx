import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, CheckCircle2, ShieldCheck, Building2, ArrowRight, FileText, Download, ExternalLink, Sparkles } from 'lucide-react';
import { Solution, SolutionType, IndustryType } from '../types';
import { SOLUTIONS_DATA, INDUSTRIES } from '../data/solutionsData';

interface Step2CatalogSectionProps {
  onSelectSolution: (solution: Solution) => void;
  onOpenPassport: (solution: Solution) => void;
}

export const Step2CatalogSection: React.FC<Step2CatalogSectionProps> = ({
  onSelectSolution,
  onOpenPassport,
}) => {
  const [selectedType, setSelectedType] = useState<SolutionType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<IndustryType[]>([
    'textile',
    'retail',
    'bank',
    'transport',
    'gov',
  ]);

  const toggleIndustry = (industry: IndustryType) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const resetFilters = () => {
    setSelectedType('all');
    setSearchQuery('');
    setSelectedIndustries(['textile', 'retail', 'bank', 'transport', 'gov']);
  };

  const filteredSolutions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return SOLUTIONS_DATA.filter((sol) => {
      // Type filter
      if (selectedType !== 'all' && sol.type !== selectedType) {
        return false;
      }
      // Industry filter
      if (selectedIndustries.length > 0 && !selectedIndustries.includes(sol.industry)) {
        return false;
      }
      // Search query
      if (q) {
        const textToSearch = [
          sol.title,
          sol.vendor,
          sol.industryLabel,
          sol.targetLoss,
          sol.provenEffect,
          ...sol.keywords,
        ].join(' ').toLowerCase();
        if (!textToSearch.includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedType, selectedIndustries, searchQuery]);

  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#F4FBF6]/60 border-y border-emerald-100" id="catalog">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-emerald-300 text-emerald-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Шаг 2 • Государственный маркетплейс GoBusiness PSG</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Реестр типовых решений GoBusiness PSG
          </h2>
          <p className="text-sm lg:text-base text-slate-600 mt-2 max-w-3xl">
            Государственный каталог аккредитованных ИИ-пакетов с фиксированной спецификацией, гарантией SLA, до 50% софинансирования из фонда $100M+ и полным соблюдением ЗРУ-547.
          </p>
        </div>

        {/* Category Type Switcher */}
        <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-emerald-200 text-xs font-semibold shadow-sm shrink-0">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedType === 'all'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-emerald-700'
            }`}
          >
            Все решения ({SOLUTIONS_DATA.length})
          </button>
          <button
            onClick={() => setSelectedType('it')}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedType === 'it'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-emerald-700'
            }`}
          >
            ИТ-решения ({SOLUTIONS_DATA.filter((s) => s.type === 'it').length})
          </button>
          <button
            onClick={() => setSelectedType('hardware')}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedType === 'hardware'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-emerald-700'
            }`}
          >
            Оборудование и сенсоры ({SOLUTIONS_DATA.filter((s) => s.type === 'hardware').length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: FILTERS AND STANDARDS */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm sticky top-24 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-sm font-bold text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              Параметры отбора решений
            </span>
            <button
              onClick={resetFilters}
              className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold underline underline-offset-4"
            >
              Сбросить всё
            </button>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Поиск по реестру
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по ключевым словам и отраслям..."
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 pl-9 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            </div>
          </div>

          {/* Industry Checkboxes */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Отраслевой фокус
              </label>
              <span className="text-[11px] text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                {INDUSTRIES.length} отраслей
              </span>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              {INDUSTRIES.map((ind) => (
                <label
                  key={ind.id}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-emerald-50/60 cursor-pointer select-none transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={selectedIndustries.includes(ind.id)}
                      onChange={() => toggleIndustry(ind.id)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                    />
                    <span className="font-medium text-slate-800">{ind.label}</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-bold">
                    {ind.count}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Government Standards Badges */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Государственные гарантии
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900 text-[11px]">IMDA PSG Standard</div>
                <div className="text-[10px] text-slate-600">Фиксированная спецификация и смета без доплат</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900 text-[11px]">ЗРУ-547 Certified</div>
                <div className="text-[10px] text-slate-600">100% суверенитет и локальный инференс данных</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs">
              <Building2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-slate-900 text-[11px]">Резиденты IT Park Uzbekistan</div>
                <div className="text-[10px] text-slate-600">Аккредитованные отечественные разработчики</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SOLUTION CARDS */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm transition-all hover:border-emerald-400 hover:shadow-md relative overflow-hidden"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 ${
                      sol.type === 'hardware' ? 'bg-slate-900' : 'bg-emerald-800'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                    {sol.typeLabel}
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {sol.coFinancingBadge}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-500 font-medium">
                  {sol.sla}
                </div>
              </div>

              {/* Title */}
              <h3
                onClick={() => onOpenPassport(sol)}
                className="text-lg sm:text-xl font-bold text-slate-900 mb-2 hover:text-emerald-600 transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span>
                  {sol.title}, версия {sol.version}
                </span>
                <ExternalLink className="w-4 h-4 text-emerald-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </h3>

              {/* Industry Line */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium">
                <span className="font-bold text-slate-800">Отрасль:</span>
                <span>{sol.industryLabel}</span>
              </div>

              {/* Target Loss vs Proven Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-xs">
                <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                  <span className="text-red-700 font-bold uppercase text-[10px] tracking-wider block mb-1">
                    Устраняемая потеря
                  </span>
                  <p className="text-slate-700 leading-relaxed font-normal">{sol.targetLoss}</p>
                </div>
                <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200">
                  <span className="text-emerald-800 font-bold uppercase text-[10px] tracking-wider block mb-1">
                    Подтвержденный эффект
                  </span>
                  <p className="text-slate-700 leading-relaxed font-normal">{sol.provenEffect}</p>
                </div>
              </div>

              {/* Package Composition and Payback */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200/80 mb-5 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    ТЭО &amp; Окупаемость
                  </span>
                  <span className="font-extrabold text-emerald-700 text-sm">
                    {sol.paybackPeriod}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    Состав аккредитованного пакета
                  </span>
                  <span className="font-medium text-slate-800 leading-snug block mt-0.5 line-clamp-2">
                    {sol.packageComposition}
                  </span>
                </div>
              </div>

              {/* Footer Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
                <div className="text-xs text-slate-600">
                  <div>
                    Поставщик: <strong className="text-slate-900">{sol.vendor}</strong> ({sol.vendorDetails})
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium">
                    Поддержка: {sol.ministrySupport}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectSolution(sol)}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
                  >
                    <span>Выбрать по стандарту PSG</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenPassport(sol)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3.5 py-2.5 rounded-full transition-colors flex items-center gap-1"
                    title="Открыть паспорт ТЭО"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Паспорт ТЭО</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Fallback if no matching solutions */}
          {filteredSolutions.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-emerald-100 shadow-sm p-8">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-semibold text-slate-800 mb-1">
                Решения по заданным критериям не найдены
              </p>
              <p className="text-xs text-slate-500 mb-4 max-w-sm mx-auto">
                Попробуйте изменить запрос или очистить фильтры по отраслям.
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full font-semibold transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
