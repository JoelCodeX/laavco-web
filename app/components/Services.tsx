import Image from "next/image";
import { landingData } from "../data/landingData";

export default function Services() {
  const { servicesSection } = landingData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "building":
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
        );
      case "wrench":
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.5 1.5 0 0019.4 18.9l-5.83-5.83M11.42 15.17a6 6 0 11-8.5-8.5 6 6 0 018.5 8.5zm0 0l-3-3M13.5 3h-3a1.5 1.5 0 00-1.5 1.5V6" />
          </svg>
        );
      case "bolt":
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        );
      case "design":
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5L12 2.25 3 7.5m18 0v9L12 21.75M3 7.5v9l9 5.25m9-14.25L12 12.75 3 7.5m9 5.25v9" />
          </svg>
        );
      case "crane":
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5M12 12.75v8.25" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75h13.5M12 3.75L12 12.75" />
          </svg>
        );
      case "settings":
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .225c-.008.379.137.751.43.992l1.002.828a1.125 1.125 0 01.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.003-.827c.293-.24.438-.613.43-.992a6.932 6.932 0 010-.225c.007-.379-.138-.751-.43-.992l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        );
    }
  };

  return (
    <section id="servicios" className="w-full bg-brand-light py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado de la Sección */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="text-brand-orange text-xs md:text-sm font-extrabold tracking-widest uppercase">
            {servicesSection.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {servicesSection.title}
          </h2>
          <div className="w-16 h-1 bg-brand-orange mt-2 rounded-full" />
        </div>

        {/* Cuadrícula de Servicios (Grid 3x2 en desktop, 2 en mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8">
          {servicesSection.items.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Imagen del Servicio / Contenedor */}
              <div className="relative h-28 sm:h-48 w-full bg-neutral-900 overflow-hidden">
                {/* Overlay de degradado */}
                <div className="absolute inset-0 bg-neutral-900/40 z-10 transition-opacity duration-300 group-hover:bg-neutral-900/20" />
                {/* Fallback de color de fondo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 to-neutral-700/40" />
                
                {/* Imagen real */}
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                />

                {/* Icono Flotante en la Esquina */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-brand-orange rounded-full flex items-center justify-center shadow-lg border border-orange-500/30 group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Contenido de Texto */}
              <div className="p-3.5 sm:p-6 flex flex-col flex-1 gap-1.5 sm:gap-2.5">
                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-neutral-900 group-hover:text-brand-orange transition-colors min-h-[2rem] sm:min-h-0">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-sm text-neutral-600 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
