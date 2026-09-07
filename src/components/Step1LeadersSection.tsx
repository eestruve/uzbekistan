import React from 'react';
import { UserCheck, Sparkles, Building, Briefcase, Factory, Plane, FileCheck } from 'lucide-react';

interface Step1LeadersSectionProps {
  onOpenMeetingModal: () => void;
}

export const Step1LeadersSection: React.FC<Step1LeadersSectionProps> = ({ onOpenMeetingModal }) => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-emerald-100" id="step1">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full">
          Шаг 1 экосистемы
        </span>
        <div className="h-px bg-emerald-200/70 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
        <div className="lg:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Формирование осознанного спроса: Подготовка лидеров изменений
          </h2>
        </div>
        <div className="lg:col-span-6 flex items-end">
          <p className="text-base text-slate-600 leading-relaxed">
            Внедрение ИИ начинается не с закупки серверов, а с перестройки бизнес-мышления топ-менеджмента. Мы готовим руководителей, способных посчитать возврат на каждый инвестированный доллар до подписания контрактов.
          </p>
        </div>
      </div>

      {/* 3 Audience Segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-600" />
              <span>Сегмент A</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Крупный частный бизнес ($5M+ выручка)</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Владельцы и генеральные директора производственных холдингов, девелоперов, дистрибьюторских и логистических сетей.
            </p>
          </div>
          <div className="text-xs font-semibold text-emerald-900 bg-emerald-50/90 p-3 rounded-xl border border-emerald-200">
            Цель: Снижение операционных потерь на 15–30% и кратный рост EBITDA
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-600" />
              <span>Сегмент B</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Государственные структуры и Нацкомпании</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Заместители министров по цифровизации (CDTO), руководители департаментов оптимизации процессов и контроля регламентов.
            </p>
          </div>
          <div className="text-xs font-semibold text-emerald-900 bg-emerald-50/90 p-3 rounded-xl border border-emerald-200">
            Цель: Исполнение КПЭ Указа № ПП-358 без рисков нецелевых трат
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <Factory className="w-4 h-4 text-emerald-600" />
              <span>Сегмент C</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Промышленные кластеры и Текстиль</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Руководители фабрик прядения, ткачества, окраски и швейных производств с высокими потерями на браке полотна.
            </p>
          </div>
          <div className="text-xs font-semibold text-emerald-900 bg-emerald-50/90 p-3 rounded-xl border border-emerald-200">
            Цель: Компьютерное зрение и автоматический контроль сортности полотна
          </div>
        </div>
      </div>

      {/* Trajectory and Concierge Service */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-white rounded-2xl p-7 border border-emerald-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Интенсивная траектория</span>
              <span className="text-xs font-mono bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full font-bold">4-5 НЕДЕЛЬ</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Ташкент → Китай (Пекин / Ханчжоу / Шэньчжэнь) → Защита ТЭО
            </h3>
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-slate-900 font-semibold">Неделя 1-2 (Ташкент):</strong> Диагностический экспресс-аудит бизнес-процессов на предприятии, оцифровка потерь и составление инвестиционного профиля.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-slate-900 font-semibold">Неделя 3 (Бизнес-миссия в КНР):</strong> Очный визит на безлюдные фабрики «Dark Factory», логистические ИИ-хабы и центры робототехники Alibaba, Huawei, SenseTime.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-slate-900 font-semibold">Неделя 4-5 (Ташкент):</strong> Финализация технико-экономического обоснования (ТЭО) с гарантированным ROI для наблюдательного совета и кредитного комитета.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Синхронизировано с методологией Enterprise Singapore</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              100% готовность к комитету
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-7 flex flex-col justify-between shadow-lg border border-emerald-800/40">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-emerald-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              VIP-формат участия
            </div>
            <h3 className="text-xl font-bold mb-3">Сервис «Аналитический консьерж»</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
              <strong className="text-white">0 часов рутины для первого лица.</strong> Команда аккредитованных аналитиков собирает первичные данные цехов, проводит хронометраж, формулирует гипотезы и оформляет ТЭО «под ключ». Руководитель утверждает только финальные стратегические развилки.
            </p>
          </div>

          <div className="bg-slate-800/90 rounded-xl p-4 border border-emerald-500/30 text-xs">
            <div className="text-slate-400 mb-1">Стоимость участия:</div>
            <div className="text-2xl font-black text-white mb-1">
              $12 500 <span className="text-xs text-emerald-400 font-normal">/ предприятие</span>
            </div>
            <div className="text-emerald-400 font-semibold mb-3">
              Полная самоокупаемость программы без привлечения бюджетных средств
            </div>
            <button
              onClick={onOpenMeetingModal}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-2.5 rounded-xl transition-all text-xs text-center"
            >
              Зарезервировать слот в потоке
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
