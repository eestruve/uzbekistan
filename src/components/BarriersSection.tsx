import React from 'react';
import { AlertCircle, Clock, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export const BarriersSection: React.FC = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24" id="barriers">
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          Диагностика системных сбоев
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Почему традиционные меры цифровизации буксуют
        </h2>
        <p className="text-base lg:text-lg text-slate-600 mt-4 leading-relaxed">
          Сотни грантов и заказных заказных разработок («Custom Dev») растворяются в бесконечных ТЗ и пилотах без реальной экономической отдачи для фабрик и заводов.
        </p>
      </div>

      {/* 3 Barriers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/90 flex flex-col justify-between hover:border-red-200 hover:shadow-md transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center font-bold text-lg mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Барьер предприятий</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Страх инвестиций в неизвестность. 87% руководителей боятся навязанных «раздутых смет» интеграторов и не верят в реальный рост EBITDA от ИИ.
            </p>
          </div>
          <div className="text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50/80 p-3 rounded-xl border border-red-200/70">
            Следствие: Консервация архаичных ручных процессов
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/90 flex flex-col justify-between hover:border-amber-200 hover:shadow-md transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center font-bold text-lg mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Барьер разработчиков</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Каждый новый клиент требует уникальной кастомной разработки с нуля. Цикл сделки затягивается до 9–14 месяцев, убивая масштабирование продукта.
            </p>
          </div>
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50/80 p-3 rounded-xl border border-amber-200/70">
            Следствие: Дефицит тиражируемых коробочных решений
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/90 flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-bold text-lg mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Барьер регулятора</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Сложность прозрачного контроля целевого эффекта субсидий и риски претензий проверяющих органов при финансировании абстрактного R&amp;D.
            </p>
          </div>
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50/80 p-3 rounded-xl border border-blue-200/70">
            Следствие: Низкая скорость освоения госфондов
          </div>
        </div>
      </div>

      {/* Singapore Solution Banner */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Сингапурский эталон SMEs Go Digital / PSG</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Принцип Сингапура: Полный отказ от заказной разработки в пользу пре-аккредитованных коробок
          </h3>

          <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-8">
            Государство не изобретает софт и не оплачивает бесконечный консалтинг. IMDA и Enterprise Singapore создали открытый реестр типовых цифровых решений с фиксированной спецификацией, проверенным поставщиком и регламентированной отдачей.
          </p>
        </div>

        {/* 5 Steps of the Ecosystem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6 border-t border-slate-800 text-slate-300" id="steps">
          <a
            href="#step1"
            className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-800/90 transition-all group block"
          >
            <div className="text-xs font-mono text-emerald-400 font-bold mb-1 group-hover:translate-x-1 transition-transform">
              ШАГ 01 →
            </div>
            <div className="text-sm font-bold text-white mb-1">Аудит и Обучение</div>
            <div className="text-xs text-slate-400">Школа лидеров и подготовка ТЭО до внедрения</div>
          </a>

          <a
            href="#catalog"
            className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-800/90 transition-all group block"
          >
            <div className="text-xs font-mono text-emerald-400 font-bold mb-1 group-hover:translate-x-1 transition-transform">
              ШАГ 02 →
            </div>
            <div className="text-sm font-bold text-white mb-1">Реестр GoBusiness</div>
            <div className="text-xs text-slate-400">Каталог пре-аккредитованных решений с SLA</div>
          </a>

          <a
            href="#finance"
            className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-800/90 transition-all group block"
          >
            <div className="text-xs font-mono text-emerald-400 font-bold mb-1 group-hover:translate-x-1 transition-transform">
              ШАГ 03 →
            </div>
            <div className="text-sm font-bold text-white mb-1">Финансовый Шлюз</div>
            <div className="text-xs text-slate-400">Адресное софинансирование 50/50 через фонд $100M</div>
          </a>

          <a
            href="#sovereignty"
            className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-800/90 transition-all group block"
          >
            <div className="text-xs font-mono text-emerald-400 font-bold mb-1 group-hover:translate-x-1 transition-transform">
              ШАГ 04 →
            </div>
            <div className="text-sm font-bold text-white mb-1">Доведение до цеха</div>
            <div className="text-xs text-slate-400">Отраслевые наставники и локальный контур ЗРУ-547</div>
          </a>

          <a
            href="#simulator"
            className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-800/90 transition-all group block"
          >
            <div className="text-xs font-mono text-emerald-400 font-bold mb-1 group-hover:translate-x-1 transition-transform">
              ШАГ 05 →
            </div>
            <div className="text-sm font-bold text-white mb-1">Экспортный лифт</div>
            <div className="text-xs text-slate-400">Масштабирование узбекских ИИ-продуктов в ЦА и MENA</div>
          </a>
        </div>
      </div>
    </section>
  );
};
