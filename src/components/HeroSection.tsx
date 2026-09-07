import React from 'react';
import { Sparkles, Grid, BarChart3, Landmark, Target, ShieldCheck, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenMemorandumModal: () => void;
  onOpenMeetingModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMemorandumModal, onOpenMeetingModal }) => {
  return (
    <section className="relative bg-radial-hero bg-grid-tech pt-12 lg:pt-16 pb-20 border-b border-emerald-100 overflow-hidden" id="hero">
      {/* Subtle Crosshair Tech Markers */}
      <div className="absolute top-10 left-8 text-emerald-500/30 text-2xl font-mono select-none pointer-events-none hidden sm:block">+</div>
      <div className="absolute top-10 right-8 text-emerald-500/30 text-2xl font-mono select-none pointer-events-none hidden sm:block">+</div>
      <div className="absolute bottom-10 left-1/4 text-emerald-500/20 text-2xl font-mono select-none pointer-events-none hidden sm:block">+</div>
      <div className="absolute bottom-10 right-1/4 text-emerald-500/20 text-2xl font-mono select-none pointer-events-none hidden sm:block">+</div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Presidential Decree Pill */}
          <div className="inline-flex items-center gap-2 self-start bg-white/95 backdrop-blur-sm border border-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-800 shadow-sm shadow-emerald-500/10 tracking-tight">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>🏛️ В РЕАЛИЗАЦИЮ СТРАТЕГИИ ЦИФРОВОЙ УЗБЕКИСТАН – 2030 И УКАЗА № ПП-358</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Национальная модель внедрения прикладного ИИ:{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
              Программа решений для повышения производительности
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-[20px] text-slate-600 leading-relaxed max-w-3xl">
            Практическая адаптация сингапурского государственного стандарта{' '}
            <strong className="text-slate-900 font-semibold">Productivity Solutions Grant (PSG)</strong> агентств{' '}
            <strong className="text-slate-900 font-semibold">IMDA &amp; Enterprise Singapore</strong> для масштабной технологической модернизации реального сектора экономики Республики Узбекистан.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#catalog"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:from-emerald-700 hover:to-green-700 shadow-lg shadow-emerald-600/30 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Grid className="w-4 h-4" />
              <span>Открыть Реестр решений GoBusiness</span>
            </a>
            <a
              href="#simulator"
              className="bg-white border-2 border-emerald-200 text-emerald-900 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-emerald-50/80 hover:border-emerald-300 flex items-center gap-2 shadow-sm"
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Симулятор макроэффекта</span>
            </a>
            <button
              onClick={onOpenMemorandumModal}
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-6 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2"
            >
              <span>Текст Меморандума</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </div>

        {/* Ministerial Keynote Card */}
        <div className="mt-12 lg:mt-14 bg-white/95 rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-200/90 relative overflow-hidden shadow-xl shadow-emerald-500/5">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-bl from-emerald-300/30 via-lime-200/20 to-transparent blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Официальная позиция Министерства цифровых технологий
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 leading-snug">
                «Искусственный интеллект — это не эксперименты лабораторий, а прикладной инструмент кратного роста производительности труда на каждом узбекском предприятии и фабрике.»
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center font-bold text-base shadow-md shadow-emerald-600/30 shrink-0">
                  ШШ
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Шерзод Шерматов</div>
                  <div className="text-xs text-slate-500 font-medium">Министр цифровых технологий Республики Узбекистан</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50/90 to-lime-50/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-sm flex flex-col gap-3">
              <div className="text-xs uppercase font-bold tracking-wider text-emerald-800 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-emerald-600" />
                Ключевой фокус модели
              </div>
              <div className="text-sm font-bold text-slate-900">
                Интеграция передовых решений в промышленные циклы
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Переход от неструктурированных ИТ-субсидий к государственному реестру жестко валидированных тиражируемых продуктов с гарантированным SLA и подтвержденным экономическим возвратом.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-700 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Опыт IMDA Singapore SMEs Go Digital</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Stat Cards in IT Park Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700 transition-colors">
                Капитал развития
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Landmark className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-emerald-700 transition-colors">
              $100 млн+
            </div>
            <div className="text-xs text-slate-600 font-medium leading-normal">
              Правительственный фонд льготного софинансирования ИИ-инициатив
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700 transition-colors">
                Государственный норматив
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-emerald-700 transition-colors">
              100 проектов
            </div>
            <div className="text-xs text-slate-600 font-medium leading-normal">
              Целевой норматив внедрений по Указу Президента РУз № ПП-358
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700 transition-colors">
                Нагрузка на бюджет
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-emerald-700 tracking-tight mb-1">
              0 сумов
            </div>
            <div className="text-xs text-slate-600 font-medium leading-normal">
              100% автономия запуска за счет прямого участия бизнеса ($12 500)
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700 transition-colors">
                Экспорт IT-услуг
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-emerald-700 transition-colors">
              $1,5 млрд
            </div>
            <div className="text-xs text-slate-600 font-medium leading-normal">
              Плановый вклад в экспорт ИТ и ИИ услуг республики к 2030 году
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
