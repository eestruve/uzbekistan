import React from 'react';
import { X, Printer, Download, ShieldCheck, Landmark, CheckCircle2 } from 'lucide-react';

interface MemorandumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemorandumModal: React.FC<MemorandumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-emerald-200 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Landmark className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                B2G Документ • Аналитическая записка
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Официальный Меморандум Программы
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1 text-xs font-semibold"
              title="Печать"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Печать</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Memorandum Content */}
        <div className="p-6 sm:p-10 space-y-6 text-slate-700 leading-relaxed text-xs sm:text-sm font-normal">
          {/* Institutional Document Header */}
          <div className="text-center border-b border-slate-200 pb-6 space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-emerald-800">
              IT PARK UZBEKISTAN &bull; МИНИСТЕРСТВО ЦИФРОВЫХ ТЕХНОЛОГИЙ РЕСПУБЛИКИ УЗБЕКИСТАН
            </div>
            <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-snug">
              МЕМОРАНДУМ О ВНЕДРЕНИИ НАЦИОНАЛЬНОЙ МОДЕЛИ ПРИКЛАДНОГО ИИ НА БАЗЕ СИНГАПУРСКОГО СТАНДАРТА PRODUCTIVITY SOLUTIONS GRANT (PSG)
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              В исполнение Указа Президента Республики Узбекистан № ПП-358 и Стратегии «Цифровой Узбекистан – 2030»
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              1. Нормативная база и текущий статус
            </h3>
            <p>
              Указом Президента Республики Узбекистан № ПП-358 определен норматив запуска не менее 100 прикладных проектов внедрения технологий искусственного интеллекта в реальном секторе экономики. Международный опыт агентств IMDA и Enterprise Singapore свидетельствует, что наиболее устойчивым и масштабируемым форматом является программа <strong>Productivity Solutions Grant (PSG)</strong>, полностью исключающая риски финансирования заказной разработки с нуля.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              2. Ключевые принципы сингапурской модели для Узбекистана
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>
                <strong>Отказ от кастомной разработки:</strong> Субсидированию подлежат исключительно пре-аккредитованные коробочные решения из открытого Реестра GoBusiness с жестко зафиксированной сметой и гарантийным SLA.
              </li>
              <li>
                <strong>Софинансирование 50/50:</strong> Предприятие инвестирует 50% собственных средств, подтверждая экономическую целесообразность. 50% компенсируется фондом $100M+ только по факту ввода в эксплуатацию.
              </li>
              <li>
                <strong>Институт отраслевых наставников:</strong> Физическое сопровождение внедрения на конвейере до момента освоения системы линейными мастерами и операторами.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              3. Защита суверенитета данных по Закону РУз № ЗРУ-547
            </h3>
            <p>
              В строгом соответствии со статьями 15-1 и 27-1 Закона «О персональных данных», все тиражируемые ИИ-решения обязаны функционировать на базе On-Premise серверов либо суверенных дата-центров, расположенных внутри юрисдикции Республики Узбекистан. Передача производственной телеметрии во внешние неконтролируемые публичные сервисы категорически запрещена.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              4. План-график очных шагов
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="font-bold text-emerald-900">Этап 1 (1–14 дней)</div>
                <div className="text-slate-600 mt-1">Межведомственная группа Минцифры и ТПП, утверждение положения.</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="font-bold text-emerald-900">Этап 2 (15–45 дней)</div>
                <div className="text-slate-600 mt-1">Старт первого потока 25 заводов, аудит и бизнес-миссия в КНР.</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="font-bold text-emerald-900">Этап 3 (46–90 дней)</div>
                <div className="text-slate-600 mt-1">Подключение фонда $100M+ и масштабирование до 100 проектов.</div>
              </div>
            </div>
          </div>

          {/* Signatures block */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between text-xs text-slate-500 gap-4">
            <div>
              <div className="font-bold text-slate-900">От рабочей группы программы:</div>
              <div>Координационный совет IT Park Uzbekistan</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Место составления:</div>
              <div>г. Ташкент, Республика Узбекистан, 2025</div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Распечатать меморандум</span>
          </button>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 px-5 py-2.5 rounded-xl text-xs font-semibold"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
