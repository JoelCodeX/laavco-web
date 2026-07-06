import Image from "next/image";
import { landingData } from "../data/landingData";

export default function Equipment() {
  const { equipmentSection } = landingData;

  // Enlace genérico de cotización por WhatsApp con el nombre del equipo pre-rellenado
  const getWhatsAppQuoteLink = (equipmentTitle: string) => {
    const text = encodeURIComponent(
      `Hola LAAVCO, estoy interesado en cotizar el alquiler de: ${equipmentTitle}.`
    );
    return `https://wa.me/51901884606?text=${text}`;
  };

  return (
    <section id="equipos" className="w-full bg-brand-navy text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Encabezado con Botón a la derecha (estilo proyectos) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-800 pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-brand-orange text-xs md:text-sm font-extrabold tracking-widest uppercase">
              {equipmentSection.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {equipmentSection.title}
            </h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full mt-1" />
          </div>

          <a
            href="/equipos"
            className="hidden md:inline-block border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange text-xs font-bold py-2.5 px-6 rounded-md transition-colors"
          >
            {equipmentSection.buttonLabel}
          </a>
        </div>

        {/* Listado de Tarjetas de Equipos */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-6">
          {equipmentSection.items.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg flex flex-col transition-all duration-300 hover:border-brand-orange hover:shadow-2xl hover:shadow-brand-orange/5 group"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-32 sm:h-44 bg-white flex items-center justify-center p-3 sm:p-4">
                {/* Imagen del equipo */}
                <Image
                  src={equipment.imagePath}
                  alt={equipment.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105 z-10 p-2 sm:p-4"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />

                {/* Si no hay imagen, un marcador visual */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none z-0">
                  <svg className="w-12 h-12 sm:w-20 sm:h-20 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.68-.34-1.12-1-1.12-1.78V9.94c0-.78.44-1.44 1.12-1.78l5-2.5c.78-.39 1.66.18 1.66.97v5.88c0 .78-.44 1.44-1.12 1.78l-5 2.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.25 15.84c-.68-.34-1.12-1-1.12-1.78V9.94c0-.78.44-1.44 1.12-1.78l5-2.5c.78-.39 1.66.18 1.66.97v5.88c0 .78-.44 1.44-1.12 1.78l-5 2.5z" />
                  </svg>
                </div>
              </div>

              {/* Especificaciones y Contenido */}
              <div className="p-3.5 sm:p-5 flex flex-col flex-1 gap-3 sm:gap-4 justify-between">
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight group-hover:text-brand-orange transition-colors min-h-[2rem] sm:min-h-0">
                    {equipment.title}
                  </h3>

                  {/* Lista de Especificaciones */}
                  <ul className="flex flex-col gap-1.5 sm:gap-2">
                    {equipment.specs.map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-neutral-300">
                        {/* Checkmark SVG */}
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="font-medium line-clamp-1 sm:line-clamp-none">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón Cotizar */}
                <a
                  href={getWhatsAppQuoteLink(equipment.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-center text-[10px] sm:text-xs font-bold py-2 sm:py-2.5 px-3 sm:px-4 rounded-md transition-colors block w-full mt-1.5 sm:mt-2"
                >
                  COTIZAR
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Todos (solo móvil) */}
        <div className="text-center mt-4 md:hidden">
          <a
            href="/equipos"
            className="inline-block border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange text-xs font-bold py-3 px-8 rounded-md transition-colors w-full"
          >
            {equipmentSection.buttonLabel}
          </a>
        </div>

      </div>
    </section>
  );
}
