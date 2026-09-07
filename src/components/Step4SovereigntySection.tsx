import React from 'react';
import { UserCheck, Shield, CheckCircle, Lock, HardDrive, Cpu, Server } from 'lucide-react';

export const Step4SovereigntySection: React.FC = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#F4FBF6]/60 border-y border-emerald-100" id="sovereignty">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider bg-white border border-emerald-300 text-emerald-800 px-3.5 py-1 rounded-full shadow-sm">
          Шаг 4 экосистемы
        </span>
        <div className="h-px bg-emerald-200/70 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
        <div className="lg:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Доведение до цеха и Безусловный Суверенитет данных
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Софт на мониторе не приносит прибыли, пока рабочий у конвейера не начнет выполнять его указания. Мы создаем инфраструктуру внедрения «на земле».
          </p>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-end">
          <div className="bg-white rounded-2xl p-6 border border-emerald-200/90 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              Ключевой институт
            </div>
            <div className="text-lg font-bold text-slate-900 mb-2">
              Отраслевые наставники (Implementation Champions)
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              За каждым объектом закрепляется сертифицированный отраслевой куратор. Его задача — физически присутствовать на производстве до тех пор, пока сменный мастер и начальник цеха не освоят регламент работы с ИИ-системой.
            </p>
          </div>
        </div>
      </div>

      {/* Cards: Responsibility + Law ЗРУ-547 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white rounded-2xl p-7 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Единое окно ответственности</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
              Классическая проблема интеграции — разработчик обвиняет завод в плохих данных, а завод разработчика в неработающем софте. В модели PSG оператор программы выступает единым гарантом результата.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Воспитание внутреннего лидера цифровизации внутри штата заказчика</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Типовые регламенты сменных заданий и мотивации операторов линии</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Сопровождение до первого официального подтверждения финансового эффекта</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-emerald-800 font-semibold">
            Минимизация саботажа линейного персонала
          </div>
        </div>

        {/* ЗРУ-547 Data Sovereignty */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-2xl p-7 border border-emerald-600/30 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase">
                100% On-Premise &amp; Local Cloud
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Соблюдение Закона РУз № ЗРУ-547</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
              Строгое соответствие статьям 15-1 и 27-1 Закона Республики Узбекистан «О персональных данных». Промышленные телеметрические потоки, записи переговоров и производственные ноу-хау предприятий не покидают суверенный периметр.
            </p>
            <div className="space-y-2 text-xs text-slate-300 bg-slate-900/80 p-3.5 rounded-xl border border-emerald-500/30 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Никакой передачи ведомственных промданных в публичные зарубежные облака</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Размещение серверов инференса в защищенных ЦОД на территории Республики Узбекистан</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Использование открытых моделей (Open-weights), дообученных локально</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-semibold">
            Государственная безопасность и защита коммерческой тайны
          </div>
        </div>
      </div>
    </section>
  );
};
