import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, FileText } from 'lucide-react';
import { Solution } from '../types';

interface PsgApplicationModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PsgApplicationModal: React.FC<PsgApplicationModalProps> = ({
  solution,
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    inn: '',
    industry: solution?.industry || 'textile',
    contactName: '',
    phone: '',
    email: '',
    revenue: '$1M - $5M',
    employees: '50 - 250',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `PSG-UZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-emerald-200 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Государственный стандарт PSG 50/50
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {submitted ? 'Заявка зарегистрирована' : 'Заявка на софинансирование ИИ'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Заявка успешно принята в реестр
              </h4>
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-900 inline-block">
                Регистрационный номер: <strong className="font-mono font-bold text-sm block mt-1">{refNumber}</strong>
              </div>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                По регламенту программы уполномоченный отраслевой наставник IT Park свяжется с вами в течение 24 рабочих часов для согласования даты первичного экспресс-аудита цеха.
              </p>

              <div className="text-left bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 text-[11px] space-y-1.5 text-slate-700 mt-4">
                <div className="font-bold text-slate-900 mb-1">Следующие автоматические шаги:</div>
                <div>1. Проверка ИНН компании по налоговой базе на отсутствие задолженности</div>
                <div>2. Подтверждение доступности слота софинансирования в фонде $100M+</div>
                <div>3. Формирование инвестиционного профиля и проект договора PSG</div>
              </div>

              <button
                onClick={resetAndClose}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Вернуться к каталогу
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {solution && (
                <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-200 flex items-start gap-3 mb-2">
                  <FileText className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                      Выбранное решение по стандарту PSG:
                    </span>
                    <strong className="text-slate-900 text-xs block leading-snug">
                      {solution.title} (v{solution.version})
                    </strong>
                    <span className="text-[11px] text-slate-600">
                      Вендор: {solution.vendor} • Софинансирование 50%
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Наименование предприятия *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ООО «Samarkand Textile Group»"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    ИНН предприятия *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="9 цифр"
                    maxLength={9}
                    value={formData.inn}
                    onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    ФИО руководителя / CDTO *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Алишер Каримов"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Контактный телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Корпоративный Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ceo@company.uz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Годовая выручка
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="до $1M">До $1 000 000</option>
                    <option value="$1M - $5M">$1 000 000 – $5 000 000</option>
                    <option value="$5M - $15M">$5 000 000 – $15 000 000</option>
                    <option value="$15M+">Более $15 000 000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                  Дополнительные комментарии или особенности производства
                </label>
                <textarea
                  rows={2}
                  placeholder="Укажите количество производственных линий, текущее учетное ПО или специфику брака..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-full shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Зарегистрировать заявку на софинансирование 50%</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                Обработка данных осуществляется в закрытом государственном контуре в соответствии с Законом РУз № ЗРУ-547.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
