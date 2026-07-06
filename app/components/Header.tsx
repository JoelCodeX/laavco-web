"use client";

import { useState, useEffect } from "react";
import { landingData } from "../data/landingData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { topBar, navigation } = landingData;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled((prev) => {
        if (!prev && currentScroll > 50) {
          return true;
        }
        if (prev && currentScroll <= 15) {
          return false;
        }
        return prev;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 shadow-md transition-all duration-300">
      {/* Barra de Utilidad Superior (Desktop) */}
      <div className={`bg-neutral-900 text-neutral-300 text-[10px] sm:text-xs px-4 md:px-12 flex justify-between items-center border-b border-neutral-800 transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0 border-none opacity-0" : "max-h-12 py-2 opacity-100"
        }`}>
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
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
              </svg>
            </a>
            <a
              href={topBar.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32">
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
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
          <img src="/letter-logo.png" alt="Logo" className="h-12 md:h-14 w-auto object-contain" />
          <img src="/desc-logo.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
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
            {/* Icono de WhatsApp */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="currentColor" />
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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="currentColor" />
              </svg>
              {navigation.ctaButton.label}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
