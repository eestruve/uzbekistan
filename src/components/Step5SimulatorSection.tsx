import React, { useState } from 'react';
import { BarChart3, Rocket, DollarSign, Users, TrendingUp, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { MACRO_SCENARIOS } from '../data/solutionsData';

interface Step5SimulatorSectionProps {
  onOpenMeetingModal: () => void;
}

export const Step5SimulatorSection: React.FC<Step5SimulatorSectionProps> = ({ onOpenMeetingModal }) => {
  const [activeScenario, setActiveScenario] = useState<number>(100);

  // Micro enterprise calculator state
  const [companyRevenue, setCompanyRevenue] = useState<number>(3500000); // $3.5M
  const [companyIndustry, setCompanyIndustry] = useState<string>('textile');

  const currentScen = MACRO_SCENARIOS[activeScenario] || MACRO_SCENARIOS[100];

  // Calculate enterprise potential
  const savingsRate = companyIndustry === 'textile' ? 0.045 : companyIndustry === 'retail' ? 0.038 : 0.032;
  const estimatedSavings = Math.round(companyRevenue * savingsRate);
  const estimatedPackageCost = 35000;
  const stateGrant = estimatedPackageCost * 0.5; // 50%
  const enterpriseShare = estimatedPackageCost * 0.5; // 50%
  const paybackMonths = Math.max(2, Math.round((enterpriseShare / (estimatedSavings / 12)) * 10) / 10);

  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24" id="simulator">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Шаг 5 • Экономическая модель
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Интерактивный симулятор макроэффекта
          </h2>
          <p className="text-sm lg:text-base text-slate-600 mt-2 max-w-2xl">
            Динамический расчет макроэкономических показателей программы в зависимости от масштаба внедрения по целевым сценариям
          </p>
        </div>

        {/* Scenario Switcher Buttons */}
        <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveScenario(25)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeScenario === 25
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-800'
            }`}
          >
            25 предприятий (Пилот)
          </button>
          <button
            onClick={() => setActiveScenario(50)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeScenario === 50
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-800'
            }`}
          >
            50 предприятий
          </button>
          <button
            onClick={() => setActiveScenario(100)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeScenario === 100
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 hover:text-emerald-800'
            }`}
          >
            100 предприятий (ПП-358)
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Инвестиции бизнеса
          </span>
          <div className="text-3xl font-black text-slate-900 tracking-tight mb-1">
            {currentScen.inv}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Автономное частное софинансирование программы
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Заказы отечественным ИТ
          </span>
          <div className="text-3xl font-black text-slate-900 tracking-tight mb-1">
            {currentScen.it}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Прямой гарантированный объем контрактов компаниям IT Park
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Подготовлено лидеров CDTO
          </span>
          <div className="text-3xl font-black text-slate-900 tracking-tight mb-1">
            {currentScen.people}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Сертифицированные топ-менеджеры и главные инженеры
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Прирост EBITDA / год
          </span>
          <div className="text-3xl font-black text-emerald-600 tracking-tight mb-1">
            {currentScen.ebitda}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Ежегодный совокупный эффект для реального сектора
          </div>
        </div>
      </div>

      <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 mb-12 flex items-center justify-between">
        <span className="font-medium">
          <strong>Сценарий {currentScen.count} участников:</strong> {currentScen.description}
        </span>
        <span className="font-bold text-[11px] uppercase tracking-wider text-emerald-700 bg-white px-2.5 py-1 rounded-md border border-emerald-200 shrink-0 ml-3">
          SMEs Go Digital Standard
        </span>
      </div>

      {/* Micro Interactive Enterprise ROI Calculator */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-200 shadow-md mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Экспресс-калькулятор субсидии и окупаемости для вашего предприятия
              </h3>
              <p className="text-xs text-slate-500">
                Смоделируйте софинансирование 50/50 по стандарту PSG для вашей компании
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-center">
            Формула PSG 50/50
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Inputs */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Отрасль предприятия
              </label>
              <select
                value={companyIndustry}
                onChange={(e) => setCompanyIndustry(e.target.value)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="textile">Текстильная и швейная промышленность (брак, оптический контроль)</option>
                <option value="retail">Торговые сети / Дистрибуция FMCG (остатки, спрос, запасы)</option>
                <option value="bank">Банки / Финтех / МФО (андеррайтинг, суверенная аналитика)</option>
                <option value="transport">Транспорт и автопарки (телематика, топливо, маршруты)</option>
                <option value="gov">Ведомства и хокимияты (документооборот, НПА Lex.uz)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Годовой оборот / выручка предприятия:
                </label>
                <span className="text-sm font-extrabold text-emerald-700">
                  ${(companyRevenue / 1000000).toFixed(1)} млн
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="20000000"
                step="250000"
                value={companyRevenue}
                onChange={(e) => setCompanyRevenue(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>$500 тыс</span>
                <span>$10 млн</span>
                <span>$20 млн+</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              * Расчет базируется на усредненных подтвержденных эффектах решений GoBusiness PSG: сокращение неликвидов, дефектов ткани, холостых пробегов и ускорение документооборота.
            </p>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Ожидаемая экономия</span>
                <span className="text-lg font-black text-emerald-600">
                  ~${estimatedSavings.toLocaleString()} / год
                </span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Срок окупаемости</span>
                <span className="text-lg font-black text-slate-900">
                  {paybackMonths} месяца
                </span>
              </div>
            </div>

            {/* Co-Financing Split */}
            <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs">
              <div className="font-bold text-slate-900 mb-2 flex justify-between">
                <span>Структура софинансирования PSG 50/50:</span>
                <span className="text-emerald-700">${estimatedPackageCost.toLocaleString()} всего</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex mb-2">
                <div className="bg-emerald-600 h-full w-1/2" title="Грант фонда $100M+ (50%)"></div>
                <div className="bg-slate-800 h-full w-1/2" title="Доля предприятия (50%)"></div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Субсидия фонда: <strong>${stateGrant.toLocaleString()} (50%)</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                  Взнос предприятия: <strong>${enterpriseShare.toLocaleString()} (50%)</strong>
                </span>
              </div>
            </div>

            <button
              onClick={onOpenMeetingModal}
              className="w-full bg-slate-900 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Подать предварительную заявку на софинансирование</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Regional Export Elevator Card */}
      <div className="bg-gradient-to-br from-[#F4FBF6] to-white rounded-2xl p-8 border border-emerald-200/80 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
            <Rocket className="w-4 h-4 text-emerald-600" />
            Экспортный потенциал узбекского софта
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Лифт для масштабирования в Казахстан, Азербайджан и Саудовскую Аравию
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Продукты, получившие аккредитацию в каталоге GoBusiness и доказавшие окупаемость на 10+ узбекских заводах, получают статус национального экспортного стандарта для экспансии на рынки Центральной Азии и региона MENA при содействии IT Park.
          </p>
        </div>
        <button
          onClick={onOpenMeetingModal}
          className="bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-semibold px-7 py-3 rounded-full hover:from-emerald-700 hover:to-green-700 transition-all shadow-md shadow-emerald-600/25 whitespace-nowrap shrink-0"
        >
          Стать экспортным партнером
        </button>
      </div>
    </section>
  );
};
