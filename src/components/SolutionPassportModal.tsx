import React from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, Server, FileText, Printer, ArrowRight, Sparkles } from 'lucide-react';
import { Solution } from '../types';

interface SolutionPassportModalProps {
  solution: Solution | null;
  onClose: () => void;
  onApply: (solution: Solution) => void;
}

export const SolutionPassportModal: React.FC<SolutionPassportModalProps> = ({
  solution,
  onClose,
  onApply,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-emerald-200 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {solution.typeLabel}
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-mono font-semibold px-2.5 py-1 rounded-full">
                Стандарт PSG • Версия {solution.version}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              {solution.title}
            </h2>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Отрасль: <strong className="text-slate-800">{solution.industryLabel}</strong> • Вендор: <strong className="text-emerald-700">{solution.vendor}</strong>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-xs text-slate-600">
          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {solution.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                  {m.label}
                </span>
                <span className="text-base font-black text-emerald-700">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Business Impact Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50/70 rounded-2xl border border-red-200">
              <span className="text-red-800 font-bold uppercase text-[10px] tracking-wider block mb-1">
                Устраняемая производственная потеря
              </span>
              <p className="text-slate-700 leading-relaxed font-normal">{solution.targetLoss}</p>
            </div>
            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200">
              <span className="text-emerald-800 font-bold uppercase text-[10px] tracking-wider block mb-1">
                Гарантированный эффект от внедрения
              </span>
              <p className="text-slate-700 leading-relaxed font-normal">{solution.provenEffect}</p>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-600" />
              Технический регламент и архитектура развертывания
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-slate-400 block uppercase font-bold text-[9px]">Срок внедрения:</span>
                <span className="font-semibold text-slate-800">{solution.specs.deploymentTime}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-bold text-[9px]">Размещение данных:</span>
                <span className="font-semibold text-emerald-700">{solution.specs.hosting}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-bold text-[9px]">Соответствие нормам:</span>
                <span className="font-semibold text-slate-800">{solution.specs.compliance}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-bold text-[9px]">Канал поддержки:</span>
                <span className="font-semibold text-slate-800">{solution.specs.supportChannel}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block uppercase font-bold text-[9px]">Оборудование / Сенсоры:</span>
                <span className="font-medium text-slate-800">{solution.specs.hardwareNeeded}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block uppercase font-bold text-[9px]">Сопряжение с учетными системами:</span>
                <span className="font-medium text-slate-800">{solution.specs.integration}</span>
              </div>
            </div>
          </div>

          {/* Package details */}
          <div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1.5">
              Состав аккредитованной «коробки» по спецификации PSG:
            </span>
            <p className="text-slate-700 bg-white p-4 rounded-xl border border-slate-200 leading-relaxed">
              {solution.packageComposition}
            </p>
          </div>

          {/* Co-Financing Box */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Субсидия по программе: 50% компенсации из фонда ИИ
              </div>
              <div className="text-[11px] text-slate-600">
                Гарантированный срок окупаемости для предприятия: <strong className="text-emerald-800">{solution.paybackPeriod}</strong>
              </div>
            </div>
            <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
              {solution.sla}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="text-slate-700 hover:text-slate-900 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-white transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Печать паспорта</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl text-xs font-semibold"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(solution);
              }}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md shadow-emerald-600/20 flex items-center gap-1.5"
            >
              <span>Подать заявку на софинансирование</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
