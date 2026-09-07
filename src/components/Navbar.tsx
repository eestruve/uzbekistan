import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Menu, X, Layers, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenMeetingModal: () => void;
  onOpenMemorandumModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMeetingModal, onOpenMemorandumModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#barriers', label: 'О модели' },
    { href: '#steps', label: '5 шагов системы' },
    { href: '#catalog', label: 'Каталог GoBusiness' },
    { href: '#finance', label: 'Финансы' },
    { href: '#sovereignty', label: 'Наставники' },
    { href: '#simulator', label: 'Симулятор' },
    { href: '#actions', label: 'Следующие шаги' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-emerald-200/80 shadow-[0_4px_20px_rgba(22,163,74,0.06)] py-2'
          : 'bg-white/90 backdrop-blur-sm border-emerald-100/80 py-3'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[66px]">
        {/* Left Branding Group */}
        <div className="flex items-center gap-4 xl:gap-7">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-green-600 to-lime-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black tracking-widest text-emerald-800 uppercase">IT PARK</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">UZ</span>
              </div>
              <span className="text-[12px] font-bold tracking-tight text-slate-900 uppercase leading-tight">
                ПРОГРАММА ПОВЫШЕНИЯ ПРОИЗВОДИТЕЛЬНОСТИ
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold">Сингапурская модель PSG для Узбекистана 🇺🇿</span>
            </div>
          </a>

          {/* Presidential Decree Indicator */}
          <div className="hidden 2xl:flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3 py-1 rounded-full text-[11px] font-semibold tracking-tight shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            В реализацию Указа Президента РУз № ПП-358
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-[13px] font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-700 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenMemorandumModal}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full transition-colors"
            title="Официальный Меморандум для Кабинета Министров"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            <span>B2G Меморандум</span>
          </button>

          <button
            onClick={onOpenMeetingModal}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all hover:from-emerald-700 hover:to-green-700 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 flex items-center gap-1.5"
          >
            <span>Протокол внедрения</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-emerald-100 px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMemorandumModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold border border-emerald-200"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Ознакомиться с B2G Меморандумом</span>
            </button>
            <div className="text-[11px] text-center text-slate-500 font-medium mt-1">
              Указ Президента РУз № ПП-358 • Закон № ЗРУ-547
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
