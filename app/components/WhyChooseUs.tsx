import { landingData } from "../data/landingData";

export default function WhyChooseUs() {
  const { whyChooseUsSection } = landingData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return (
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 10.5h6m-6 3h6m-7.5-6h9a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0116.5 15h-9a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 017.5 6.75z" />
          </svg>
        );
      case "shieldCheck":
        return (
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        );
      case "users":
        return (
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0112 20.25a11.38 11.38 0 01-3-1.013v-.11c0-1.113.285-2.16.786-3.07M12 20.25a11.38 11.38 0 01-3-1.013V18.75m0 1.5a11.38 11.38 0 006 0v-1.5M9 18.75V15.75c0-1.113.285-2.16.786-3.07M9 18.75a9.38 9.38 0 00-2.625.372 9.337 9.337 0 00-4.121-.952 4.125 4.125 0 017.533-2.493M12 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM9.75 8.625a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM21 8.625a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
          </svg>
        );
      case "shieldAlert":
        return (
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        );
      case "headset":
        return (
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6M9.75 14.25h4.5m-4.5 0v4.5m0-4.5l-6 6m-3.75-6H7.5a3 3 0 00-3 3v2.25M6 20.25h.008v.008H6v-.008z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <section id="nosotros" className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Lado Izquierdo: Presentación */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <span className="text-brand-orange text-xs md:text-sm font-extrabold tracking-widest uppercase">
            {whyChooseUsSection.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight tracking-tight">
            {whyChooseUsSection.title}
          </h2>
          <div className="w-16 h-1 bg-brand-orange rounded-full" />

          <p className="text-neutral-600 font-medium text-base leading-relaxed mt-2">
            Nos enfocamos en brindar soluciones con los más altos estándares de seguridad y eficiencia. Contamos con equipos de última generación y un equipo humano altamente capacitado para responder a las exigencias de tu obra.
          </p>

          <div className="hidden lg:block mt-4 bg-brand-orange/5 border-l-4 border-brand-orange p-5 rounded-r-xl">
            <p className="text-sm font-bold text-neutral-800 leading-normal">
              "La calidad no es un accidente, es el resultado de un esfuerzo inteligente."
            </p>
            <span className="text-xs text-neutral-500 font-semibold block mt-1.5">— Equipo M&M LAAVCO</span>
          </div>
        </div>

        {/* Lado Derecho: Pilares / Tarjetas */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyChooseUsSection.items.map((pilar, index) => (
            <div
              key={pilar.id}
              className={`bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:border-brand-orange/20 ${index === whyChooseUsSection.items.length - 1 ? "sm:col-span-2" : ""
                }`}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-neutral-100 shrink-0">
                {getIcon(pilar.iconName)}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-neutral-900">
                  {pilar.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium">
                  {pilar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
