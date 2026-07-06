"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { landingData } from "../data/landingData";

export default function ProyectosPage() {
  const { projectsSection } = landingData;
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Obtener categorías únicas presentes en los proyectos
  const categories = ["Todos", ...Array.from(new Set(projectsSection.items.map(p => p.category)))];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = activeCategory === "Todos"
    ? projectsSection.items
    : projectsSection.items.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <Header />

      {/* Banner Principal de la Página */}
      <section className="bg-brand-navy text-white pt-32 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-3 relative z-10">
          <span className="text-brand-orange text-xs md:text-sm font-extrabold tracking-widest uppercase">
            GALERÍA DE TRABAJOS
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Nuestros Proyectos
          </h1>
          <div className="w-20 h-1 bg-brand-orange rounded-full mt-2" />
          
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl mt-2 leading-relaxed">
            Explora nuestro portafolio de obras y proyectos ejecutados. Desde estructuras metalmecánicas complejas y diseño de ingeniería 3D hasta mantenimiento integral de plantas.
          </p>
        </div>
      </section>

      {/* Contenido Principal - Galería con Filtros */}
      <main className="flex-grow max-w-7xl mx-auto w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-10">
        
        {/* Tabs de Filtro de Categorías */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2.5 border-b border-neutral-200 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs md:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 tracking-wider ${
                activeCategory === category
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/10"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 flex flex-col transition-all duration-300 group"
              >
                {/* Contenedor de Imagen */}
                <div className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-60 z-10" />
                  
                  {/* Categoría flotante sobre la imagen */}
                  <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded shadow z-20">
                    {project.category}
                  </span>
                </div>

                {/* Detalle del Proyecto */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-extrabold text-neutral-900 group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  
                  <a
                    href="https://wa.me/51901884606?text=Hola,%20quisiera%20saber%20mas%20sobre%20el%20proyecto:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-neutral-500 group-hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-auto"
                  >
                    CONSULTAR DETALLES
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center gap-3">
            <svg className="w-16 h-16 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18a2.25 2.25 0 012.25 2.25v4.25A2.25 2.25 0 0118 22.5H6a2.25 2.25 0 01-2.25-2.25V15.75A2.25 2.25 0 012.25 13.5z" />
            </svg>
            <h3 className="text-lg font-bold text-neutral-800">No se encontraron proyectos</h3>
            <p className="text-sm text-neutral-500">Intenta seleccionando otra categoría.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
