import React from 'react';
import { Layers, ShieldCheck, ExternalLink, FileText } from 'lucide-react';

interface FooterProps {
  onOpenMemorandumModal: () => void;
  onOpenMeetingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMemorandumModal, onOpenMeetingModal }) => {
  return (
    <footer className="w-full border-t border-emerald-200 bg-white py-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 font-bold text-slate-900 text-base">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-emerald-800 tracking-tight font-extrabold">IT PARK UZBEKISTAN</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 text-xs font-semibold">Сингапурский стандарт PSG для Узбекистана 🇺🇿</span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl font-normal leading-relaxed">
            Разработано в целях практической реализации Стратегии «Цифровой Узбекистан – 2030», Указа Президента Республики Узбекистан № ПП-358 и Закона Республики Узбекистан № ЗРУ-547 «О персональных данных».
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-semibold">
          <a href="#hero" className="hover:text-emerald-700 transition-colors">
            В начало
          </a>
          <a href="#catalog" className="hover:text-emerald-700 transition-colors">
            Реестр решений
          </a>
          <a href="#simulator" className="hover:text-emerald-700 transition-colors">
            Симулятор
          </a>
          <a href="#sovereignty" className="hover:text-emerald-700 transition-colors">
            ЗРУ-547
          </a>
          <button
            onClick={onOpenMemorandumModal}
            className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-bold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>B2G Меморандум</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between text-[11px] text-slate-400 gap-2">
        <span>
          © 2025 IT Park Uzbekistan &amp; Межведомственная инициатива внедрения прикладного ИИ. Все права защищены.
        </span>
        <span>Ташкент, Республика Узбекистан</span>
      </div>
    </footer>
  );
};
