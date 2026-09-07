import React from 'react';
import { Calendar, Download, Handshake, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface RoadmapActionsSectionProps {
  onOpenMeetingModal: () => void;
  onOpenMemorandumModal: () => void;
}

export const RoadmapActionsSection: React.FC<RoadmapActionsSectionProps> = ({
  onOpenMeetingModal,
  onOpenMemorandumModal,
}) => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 border-t border-emerald-100" id="actions">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          Дорожная карта реализации
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Институциональное предложение и Протокол очных шагов
        </h2>
        <p className="text-base lg:text-lg text-slate-600 mt-4 leading-relaxed">
          Готовая управленческая инфраструктура для немедленного запуска совместной Межведомственной рабочей группы.
        </p>
      </div>

      {/* 3 Stages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-2xl p-7 border border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-700">ЭТАП 01</span>
              <span className="text-xs font-bold text-slate-900 bg-emerald-100 px-2.5 py-1 rounded-full">
                1-14 ДНЕЙ
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Формирование Межведомственной рабочей группы
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
              Утверждение совместного распоряжения Минцифры и Торгово-промышленной палаты о регламенте аккредитации ИИ-решений.
            </p>
          </div>
          <div className="text-xs font-medium text-slate-500 border-t border-slate-100 pt-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Результат: Протокол №1 и утвержденное положение</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 border border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-700">ЭТАП 02</span>
              <span className="text-xs font-bold text-slate-900 bg-emerald-100 px-2.5 py-1 rounded-full">
                15-45 ДНЕЙ
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Запуск первого потока Лидеров (25 заводов)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
              Старт диагностического аудита и образовательного модуля с бизнес-миссией в центры ИИ-инноваций Китая (Ханчжоу / Шэньчжэнь).
            </p>
          </div>
          <div className="text-xs font-medium text-slate-500 border-t border-slate-100 pt-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Результат: 25 защищенных паспортов ТЭО</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 border border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-700">ЭТАП 03</span>
              <span className="text-xs font-bold text-slate-900 bg-emerald-100 px-2.5 py-1 rounded-full">
                46-90 ДНЕЙ
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Интеграция шлюза фонда $100M+ и масштабирование
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
              Открытие публичного государственного портала GoBusiness PSG и переход к нормативу 100 проектов Указа № ПП-358.
            </p>
          </div>
          <div className="text-xs font-medium text-slate-500 border-t border-slate-100 pt-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Результат: Прозрачная экосистема тиражирования ИИ</span>
          </div>
        </div>
      </div>

      {/* Executive Call to Action Card */}
      <div className="bg-gradient-to-b from-[#F4FBF6] to-white rounded-3xl p-8 lg:p-14 border border-emerald-200 text-center flex flex-col items-center shadow-lg relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
          <Handshake className="w-8 h-8" />
        </div>

        <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 max-w-2xl leading-tight mb-4">
          Готовы представить развернутую презентацию модели руководству Министерства
        </h3>

        <p className="text-slate-600 text-sm lg:text-base max-w-2xl mb-8 leading-relaxed font-normal">
          Полный комплект рабочих документов включает проект Постановления Кабинета Министров, типовой паспорт аккредитации IT-решения и регламент работы наставников в цехах.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenMeetingModal}
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Назначить рабочую встречу</span>
          </button>

          <button
            onClick={onOpenMemorandumModal}
            className="bg-white border-2 border-emerald-200 hover:border-emerald-300 text-slate-800 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-emerald-50/60 flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>Официальный меморандум B2G</span>
          </button>

          <button
            onClick={() => window.print()}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3.5 rounded-full font-semibold text-xs transition-colors flex items-center gap-1.5"
            title="Распечатать документ"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Распечатать / PDF</span>
          </button>
        </div>
      </div>
    </section>
  );
};
