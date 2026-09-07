import React from 'react';
import { Landmark, Award, Globe, Building2, Factory, Network, Truck } from 'lucide-react';

export const EcosystemMarquee: React.FC = () => {
  const partners = [
    { icon: Landmark, name: 'МИНИСТЕРСТВО ЦИФРОВЫХ ТЕХНОЛОГИЙ РУз', highlight: false },
    { icon: Award, name: 'IT PARK UZBEKISTAN', highlight: true },
    { icon: Globe, name: 'IMDA SINGAPORE STANDARD (PSG)', highlight: false },
    { icon: Building2, name: 'ТОРГОВО-ПРОМЫШЛЕННАЯ ПАЛАТА РУз', highlight: false },
    { icon: Factory, name: 'АССОЦИАЦИЯ «УЗТЕКСТИЛЬПРОМ»', highlight: false },
    { icon: Network, name: 'АССОЦИАЦИЯ БАНКОВ УЗБЕКИСТАНА', highlight: false },
    { icon: Truck, name: 'МИНИСТЕРСТВО ТРАНСПОРТА РУз', highlight: false },
  ];

  return (
    <section className="w-full border-b border-emerald-100 py-3.5 bg-emerald-50/40 overflow-hidden select-none">
      <div className="max-w-[1320px] mx-auto px-4 text-center mb-2">
        <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-bold">
          Межведомственная координация и партнерская экосистема IT Park Uzbekistan
        </span>
      </div>

      <div className="flex overflow-hidden relative">
        <div className="animate-marquee flex items-center gap-12 text-slate-500 font-semibold text-xs uppercase tracking-wider py-1">
          {partners.concat(partners).map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <span
                key={idx}
                className={`flex items-center gap-2.5 whitespace-nowrap ${
                  partner.highlight ? 'text-emerald-800 font-bold bg-emerald-100/70 px-3 py-1 rounded-full' : ''
                }`}
              >
                <Icon className={`w-4 h-4 ${partner.highlight ? 'text-emerald-700' : 'text-emerald-600'}`} />
                <span>{partner.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
