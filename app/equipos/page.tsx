"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { landingData } from "../data/landingData";

export default function EquiposPage() {
  const { equipmentSection } = landingData;
  const [searchQuery, setSearchQuery] = useState("");

  // Enlace genérico de cotización por WhatsApp con el nombre del equipo pre-rellenado
  const getWhatsAppQuoteLink = (equipmentTitle: string) => {
    const text = encodeURIComponent(
      `Hola LAAVCO, estoy interesado en cotizar el alquiler de: ${equipmentTitle}.`
    );
    return `https://wa.me/51901884606?text=${text}`;
  };

  // Filtrar equipos según la búsqueda del usuario
  const filteredEquipment = equipmentSection.items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <Header />

      {/* Banner Principal de la Página */}
      <section className="bg-brand-navy text-white pt-32 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-3 relative z-10">
          <span className="text-brand-orange text-xs md:text-sm font-extrabold tracking-widest uppercase">
            CATÁLOGO DE ALQUILER
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Nuestros Equipos
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-2" />
          
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl mt-2 leading-relaxed">
            Ofrecemos alquiler de equipos modernos y certificados para trabajos en altura y cargas pesadas. Garantiza la seguridad y eficiencia de tu personal con nuestra maquinaria.
          </p>
        </div>
      </section>

      {/* Contenido Principal - Catálogo con Buscador */}
      <main className="flex-grow max-w-7xl mx-auto w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-10">
        
        {/* Barra de Búsqueda y Filtros */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div className="relative w-full sm:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar equipo por nombre o especificación..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-brand-orange transition-colors text-sm"
            />
          </div>
          
          <span className="text-xs font-bold text-neutral-500 tracking-wider">
            MOSTRANDO {filteredEquipment.length} EQUIPO(S)
          </span>
        </div>

        {/* Grid de Equipos */}
        {filteredEquipment.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-8">
            {filteredEquipment.map((equipment) => (
              <div
                key={equipment.id}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl flex flex-col transition-all duration-300 group"
              >
                {/* Contenedor de Imagen con fondo blanco (fusión perfecta) */}
                <div className="relative h-32 sm:h-56 bg-white flex items-center justify-center p-3 sm:p-4 border-b border-neutral-100">
                  {/* Imagen del equipo */}
                  <Image
                    src={equipment.imagePath}
                    alt={equipment.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105 z-10 p-2 sm:p-6"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  
                  {/* Silueta de fondo */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none z-0">
                    <svg className="w-12 h-12 sm:w-24 sm:h-24 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.68-.34-1.12-1-1.12-1.78V9.94c0-.78.44-1.44 1.12-1.78l5-2.5c.78-.39 1.66.18 1.66.97v5.88c0 .78-.44 1.44-1.12 1.78l-5 2.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.25 15.84c-.68-.34-1.12-1-1.12-1.78V9.94c0-.78.44-1.44 1.12-1.78l5-2.5c.78-.39 1.66.18 1.66.97v5.88c0 .78-.44 1.44-1.12 1.78l-5 2.5z" />
                    </svg>
                  </div>
                </div>

                {/* Especificaciones y Contenido */}
                <div className="p-3.5 sm:p-6 flex flex-col flex-1 gap-3 sm:gap-5 justify-between">
                  <div className="flex flex-col gap-2.5 sm:gap-4">
                    <h3 className="text-xs sm:text-sm md:text-lg font-bold text-neutral-900 leading-tight group-hover:text-brand-orange transition-colors duration-300 min-h-[2rem] sm:min-h-0">
                      {equipment.title}
                    </h3>

                    {/* Lista de Especificaciones */}
                    <ul className="flex flex-col gap-1.5 sm:gap-2.5">
                      {equipment.specs.map((spec, specIdx) => (
                        <li key={specIdx} className="flex items-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs text-neutral-600 font-medium">
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
                          <span className="line-clamp-1 sm:line-clamp-none">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón Cotizar */}
                  <a
                    href={getWhatsAppQuoteLink(equipment.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white text-center text-[10px] sm:text-xs font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg shadow-md transition-colors block w-full mt-1.5 sm:mt-2"
                  >
                    COTIZAR ALQUILER
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center gap-3">
            <svg className="w-16 h-16 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-bold text-neutral-800">No se encontraron equipos</h3>
            <p className="text-sm text-neutral-500">Intenta buscando con otra palabra clave.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
