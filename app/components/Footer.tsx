"use client";

import { landingData } from "../data/landingData";

export default function Footer() {
  const { footer, clientsSection, topBar } = landingData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En un caso real, aquí procesarías el formulario.
    alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.");
  };

  return (
    <footer id="contacto" className="w-full bg-brand-navy text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-16">
        
        {/* Sección de Marcas / Clientes (Encima del Footer principal) */}
        {clientsSection && (
          <div className="border-b border-neutral-800 pb-12">
            <span className="block text-center text-xs font-extrabold tracking-widest text-neutral-400 uppercase mb-8">
              {clientsSection.tag}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
              {clientsSection.items.map((client) => (
                <div key={client.id} className="flex items-center justify-center h-12 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* Si hay logo, lo cargamos. Si no, mostramos el nombre con diseño premium */}
                  {client.logoPath.endsWith('.svg') || client.logoPath.endsWith('.png') ? (
                    <span className="text-sm md:text-base font-black tracking-wider text-neutral-300">
                      {client.name}
                    </span>
                  ) : (
                    <span className="text-sm md:text-base font-black tracking-wider text-neutral-300">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Caja de Llamado a la Acción (CTA) */}
        <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              {footer.ctaBox.title}
            </h3>
            <p className="text-orange-100 text-sm md:text-base">
              {footer.ctaBox.subtitle}
            </p>
          </div>
          <a
            href={footer.ctaBox.whatsappBtn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-neutral-100 text-brand-orange hover:text-brand-orange-hover font-black text-sm py-4 px-8 rounded-lg shadow-md transition-all duration-300 tracking-wider inline-flex items-center gap-2 shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.135-3.662l.411.244c1.614.957 3.473 1.464 5.385 1.465 5.726 0 10.385-4.659 10.388-10.388.002-2.776-1.077-5.385-3.04-7.349-1.962-1.964-4.571-3.042-7.349-3.044-5.73 0-10.386 4.659-10.389 10.39-.001 1.848.482 3.655 1.4 5.257l.263.458-1.01 3.692 3.791-.994z"/>
            </svg>
            {footer.ctaBox.whatsappBtn.label}
          </a>
        </div>

        {/* Sección de Datos y Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-neutral-800 pb-16">
          {/* Info de contacto */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-extrabold text-neutral-100">
                {footer.contactInfo.title}
              </h3>
              <div className="w-12 h-1 bg-brand-orange rounded-full" />
              <p className="text-neutral-400 text-sm max-w-sm mt-2">
                Estamos a tu disposición para ofrecerte las mejores soluciones en construcción y alquiler de equipos de elevación.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.978 14.978 0 01-6.545-6.545l2.018-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{footer.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{footer.contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{footer.contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                {footer.socialsTitle}
              </span>
              <div className="flex gap-4">
                {topBar.socials.facebook && (
                  <a href={topBar.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 hover:bg-brand-orange rounded-full text-neutral-300 hover:text-white transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  </a>
                )}
                {topBar.socials.instagram && (
                  <a href={topBar.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 hover:bg-brand-orange rounded-full text-neutral-300 hover:text-white transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                )}
                {topBar.socials.linkedin && (
                  <a href={topBar.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 hover:bg-brand-orange rounded-full text-neutral-300 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-neutral-100">
              {footer.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
              <input
                type="text"
                required
                placeholder={footer.form.fields.namePlaceholder}
                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <input
                type="email"
                required
                placeholder={footer.form.fields.emailPlaceholder}
                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <textarea
                required
                rows={4}
                placeholder={footer.form.fields.messagePlaceholder}
                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3.5 px-6 rounded-lg shadow transition-all duration-300 tracking-wider hover:translate-y-[-1px] active:translate-y-[0]"
              >
                {footer.form.submitBtnLabel}
              </button>
            </form>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 pb-8">
          <span>{footer.copyright}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Términos de Servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
