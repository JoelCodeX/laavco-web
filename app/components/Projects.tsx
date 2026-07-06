"use client";

import { useRef } from "react";
import Image from "next/image";
import { landingData, ProjectItem } from "../data/landingData";

export default function Projects() {
  const { projectsSection } = landingData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild
        ? (scrollContainerRef.current.firstElementChild as HTMLElement).offsetWidth + 24 // Card width + gap
        : 300;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="proyectos" className="w-full bg-brand-light py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Encabezado con Botón a la derecha */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-brand-orange text-xs md:text-sm font-extrabold tracking-widest uppercase">
              {projectsSection.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {projectsSection.title}
            </h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full mt-1" />
          </div>

          <div className="flex items-center gap-4">
            {/* Botones de Navegación del Slider */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="p-2.5 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                aria-label="Anterior"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-2.5 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                aria-label="Siguiente"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            
            <a
              href="/proyectos"
              className="hidden md:inline-block border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange text-xs font-bold py-2.5 px-6 rounded-md transition-colors"
            >
              {projectsSection.buttonLabel}
            </a>
          </div>
        </div>

        {/* Carrusel Deslizable */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsSection.items.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="relative rounded-xl overflow-hidden shadow-md group aspect-[4/3] bg-neutral-900 shrink-0 w-[85%] sm:w-[45%] lg:w-[31.5%] snap-start border border-neutral-100 hover:shadow-xl transition-shadow"
            >
              {/* Imagen de Fondo */}
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Detalle del Proyecto */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-1 text-white">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-base md:text-lg font-extrabold leading-snug drop-shadow-sm group-hover:text-orange-200 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Todos (solo móvil) */}
        <div className="text-center mt-2 md:hidden">
          <a
            href="/proyectos"
            className="inline-block border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-brand-orange text-xs font-bold py-3 px-8 rounded-md transition-colors w-full"
          >
            {projectsSection.buttonLabel}
          </a>
        </div>

      </div>
    </section>
  );
}
