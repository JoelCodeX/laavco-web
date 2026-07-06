import { landingData } from "../data/landingData";

export default function Hero() {
  const { hero, stats } = landingData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        );
      case "user":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        );
      case "globe":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
          </svg>
        );
      case "phone":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6M9.75 14.25h4.5m-4.5 0v4.5m0-4.5l-6 6m6-10.5h.008v.008H9.75V9.75zm0 4.5h.008v.008H9.75v-.008zm4.5 0h.008v.008h-.008v-.008zm0-4.5h.008v.008h-.008V9.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12.75a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[calc(100dvh-90px)] md:min-h-[calc(100vh-120px)] flex flex-col justify-between bg-neutral-950 text-white overflow-hidden pt-4 pb-0 md:pt-6 px-6 md:px-12 lg:px-24"
    >
      {/* Imagen de fondo / Degradado de respaldo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 select-none scale-105"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9, 18, 35, 0.95) 20%, rgba(9, 18, 35, 0.8) 50%, rgba(9, 18, 35, 0.4) 100%), url('/hero.png')`,
          backgroundColor: "#091223",
        }}
      />

      {/* Efectos de luz decorativos en el fondo */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

      {/* Contenido principal (centrado verticalmente en el espacio restante) */}
      <div className="relative z-10 max-w-3xl flex flex-col items-start gap-3 md:gap-4 animate-fadeIn w-full mt-0 md:mt-0 mb-auto py-2 md:py-4">
        <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          Construcción, Metalmecánica y Equipos
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md max-w-3xl">
          SOLUCIONES INTEGRALES EN{" "}
          <span className="text-brand-orange">CONSTRUCCIÓN</span>,{" "}
          <span className="text-brand-orange">METALMECÁNICA</span> Y{" "}
          <span className="text-white border-b-4 border-brand-orange">
            ALQUILER DE EQUIPOS
          </span>{" "}
          PARA TRABAJOS EN ALTURA.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-medium max-w-2xl leading-relaxed mt-1 drop-shadow">
          {hero.subtitle}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1.5 md:mt-3">
          {/* Botón WhatsApp */}
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg shadow-brand-orange/30 transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            {/* SVG WhatsApp */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.995 0 1.763.46 3.42 1.258 4.87L2 22l5.282-1.385c1.4.764 2.998 1.196 4.718 1.196 5.522 0 10-4.478 10-10S17.526 2 12.004 2zm0 18.286c-1.503 0-2.906-.41-4.116-1.12l-.295-.175-3.063.803.818-2.983-.19-.304a8.214 8.214 0 0 1-1.258-4.321c0-4.568 3.717-8.286 8.286-8.286 4.57 0 8.287 3.717 8.287 8.286 0 4.57-3.718 8.286-8.287 8.286zm4.567-6.223c-.25-.124-1.477-.73-1.704-.813-.227-.083-.393-.124-.558.124-.165.248-.64.813-.785.978-.145.165-.29.186-.54.062a6.837 6.837 0 0 1-2.007-1.238 7.55 7.55 0 0 1-1.388-1.728c-.145-.248-.016-.383.109-.507.112-.112.25-.29.375-.434.124-.145.165-.248.248-.414a.462.462 0 0 0-.02-.414c-.062-.124-.558-1.345-.765-1.841-.2-.486-.403-.42-.558-.427h-.475c-.165 0-.434.062-.66.31-.227.248-.867.848-.867 2.067 0 1.22.887 2.398.986 2.534.1.136 1.747 2.668 4.232 3.738 2.485 1.07 2.485.713 2.93.673.446-.04 1.478-.604 1.684-1.189.206-.584.206-1.085.145-1.189-.062-.104-.227-.165-.477-.29z" fill="currentColor" />
            </svg>
            <span>{hero.primaryCta.label}</span>
          </a>

          {/* Botón Solicitar Cotización */}
          <a
            href={hero.secondaryCta.href}
            className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md border border-white transition-colors duration-300 text-sm sm:text-base"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* Cinta de pilares / estadísticas de largo a largo (flujo flex en la parte inferior) */}
      <div className="relative z-20 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 py-4 bg-brand-navy/95 border-t border-brand-orange/20 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] lg:w-[calc(100%+12rem)] mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat: any) => (
            <div key={stat.id} className="flex items-center gap-3">
              <div className="shrink-0 bg-brand-orange/10 p-2 rounded-lg border border-brand-orange/20 flex items-center justify-center">
                {getIcon(stat.iconName)}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                  {stat.title}
                </span>
                <span className="text-[9px] sm:text-[10px] text-brand-orange font-bold uppercase tracking-wider mt-0.5">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
