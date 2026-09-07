import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Building2, User, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    format: 'Очно в Ташкенте (IT Park / Минцифры)',
    topic: 'Формирование Межведомственной рабочей группы (Этап 1)',
    preferredDate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-emerald-200 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase mb-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              Протокольная служба
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {submitted ? 'Встреча согласована' : 'Назначение рабочей встречи'}
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
                Запрос на рабочую встречу отправлен
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Секретариат межведомственной группы программы свяжется с вашей приемной для подтверждения точного времени и состава участников совещания.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 text-left space-y-1">
                <div><strong>Организация:</strong> {formData.organization}</div>
                <div><strong>Представитель:</strong> {formData.fullName} ({formData.position})</div>
                <div><strong>Тема:</strong> {formData.topic}</div>
              </div>
              <button
                onClick={resetAndClose}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Вернуться
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                  ФИО руководителя / представителя *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Имя Фамилия"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Организация / Ведомство *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Минцифры / Ассоциация / Холдинг"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Должность *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Замминистра / CDTO / Директор"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Контактный телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 71 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                    Рабочий Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="gov@mail.gov.uz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                  Предмет обсуждения
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Формирование Межведомственной группы (Этап 1)">
                    Формирование Межведомственной рабочей группы (Этап 1)
                  </option>
                  <option value="Включение завода в первый поток (25 предприятий)">
                    Включение завода в первый поток пилота (25 предприятий)
                  </option>
                  <option value="Аккредитация отечественного ИТ-решения в реестр PSG">
                    Аккредитация отечественного ИТ-решения в реестр GoBusiness PSG
                  </option>
                  <option value="Интеграция с региональным фондом софинансирования">
                    Интеграция с фондом софинансирования $100M+
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">
                  Формат встречи
                </label>
                <select
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Очно в Ташкенте (IT Park / Минцифры)">
                    Очно в Ташкенте (IT Park / Министерство цифровых технологий)
                  </option>
                  <option value="Видеоконференцсвязь (ВКС Zoom/Mind)">
                    Видеоконференцсвязь (Защищенный ВКС-канал)
                  </option>
                  <option value="Выезд рабочей группы на производственную площадку">
                    Выезд экспертной группы на фабрику / предприятие
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-full shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Направить протокольный запрос</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
