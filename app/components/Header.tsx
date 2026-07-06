"use client";

import { useState } from "react";
import { landingData } from "../data/landingData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { topBar, navigation } = landingData;

  return (
    <header className="w-full flex flex-col z-50">
      {/* Barra de Utilidad Superior (Desktop) */}
      <div className="bg-neutral-900 text-neutral-300 text-[10px] sm:text-xs py-2 px-4 md:px-12 flex justify-between items-center border-b border-neutral-800">
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href={`tel:${topBar.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-brand-orange"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span><span className="hidden sm:inline">Llámanos: </span>{topBar.phone}</span>
          </a>
          <a
            href={`mailto:${topBar.email}`}
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-brand-orange"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{topBar.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-400 hidden sm:inline">Síguenos:</span>
          <div className="flex items-center gap-3">
            <a
              href={topBar.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href={topBar.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href={topBar.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <nav className="bg-white text-neutral-800 py-3.5 px-4 md:px-12 flex justify-between items-center shadow-md relative">
        {/* Logotipo M&M LAAVCO */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          {/* Logo Icono Estilizado (M&M Hexágono) */}
          <div className="relative w-11 h-11 bg-brand-orange text-white font-bold flex flex-col justify-center items-center rounded-lg shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
            <span className="text-[10px] leading-none text-orange-200">M&M</span>
            <span className="text-sm font-black tracking-tight leading-none mt-0.5">LAAVCO</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-neutral-900 leading-none group-hover:text-brand-orange transition-colors">
              {navigation.logoName}
            </span>
            <span className="text-[9px] font-bold text-neutral-500 tracking-wider mt-1 leading-none uppercase">
              {navigation.logoSubtitle}
            </span>
          </div>
        </a>

        {/* Enlaces de Navegación (Desktop) */}
        <div className="hidden xl:flex items-center gap-7">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-neutral-700 hover:text-brand-orange transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón CTA "Cotizar Ahora" (Desktop) */}
        <div className="hidden xl:block">
          <a
            href={navigation.ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-2.5 px-5 rounded-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-md shadow-brand-orange/20"
          >
            {/* Icono de Mensaje / Teléfono */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            {navigation.ctaButton.label}
          </a>
        </div>

        {/* Botón de Menú Hamburguesa (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-neutral-700 hover:text-brand-orange transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menú Desplegable (Mobile) */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col gap-3 px-6 border-t border-neutral-100 xl:hidden z-50 animate-fadeIn">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-neutral-800 hover:text-brand-orange py-1.5 transition-colors border-b border-neutral-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navigation.ctaButton.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-center font-bold py-3 px-5 rounded-md flex justify-center items-center gap-2 mt-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              {navigation.ctaButton.label}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
