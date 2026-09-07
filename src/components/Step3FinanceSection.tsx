import React from 'react';
import { Wallet, CheckCheck, Clock, FileCheck2, ArrowRight } from 'lucide-react';

interface Step3FinanceSectionProps {
  onOpenMeetingModal: () => void;
}

export const Step3FinanceSection: React.FC<Step3FinanceSectionProps> = ({ onOpenMeetingModal }) => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24" id="finance">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full">
          Шаг 3 экосистемы
        </span>
        <div className="h-px bg-emerald-200/70 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-14 items-start">
        <div className="lg:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Финансовый шлюз: Открытый диалог с Министерством
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Прозрачный механизм адресной компенсации затрат на ИИ-модернизацию. Защита государственных средств через постоплатный принцип и привязку траншей к метрикам ТЭО.
          </p>
        </div>

        <div className="lg:col-span-6 bg-gradient-to-br from-emerald-50/80 to-white rounded-2xl p-6 border border-emerald-200 text-xs leading-relaxed text-slate-700 shadow-sm">
          <div className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
            <Wallet className="w-4 h-4 text-emerald-600" />
            Синхронизация с правительственным фондом $100M+
          </div>
          Субсидия не выдается авансом на «исследования». Выплата компенсации (до 50% стоимости коробки) осуществляется уполномоченным финансовым оператором только после подписания трехстороннего акта ввода в промышленную эксплуатацию и фиксации сокращения производственных потерь.
        </div>
      </div>

      {/* 3 Pillars of Financial Control */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">
            Адресное софинансирование 50/50
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Предприятие вкладывает 50% собственных средств, подтверждая коммерческую заинтересованность. Оставшиеся 50% субсидируются фондом напрямую поставщику по факту достижения КПЭ.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">
            Жесткие критерии SLA
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Каждое решение из каталога PSG сопровождается регламентированным показателем доступности (Uptime ≥ 99.5%), точности распознавания и временем реакции техподдержки не более 15 минут.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">
            Аудит Счетной палаты
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Электронный паспорт каждого проекта внедрения доступен в цифровом реестре. Отсутствие двусмысленных ТЗ исключает коррупционные риски при ведомственных проверках.
          </p>
        </div>
      </div>
    </section>
  );
};
