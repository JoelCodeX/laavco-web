"use client";

import { landingData } from "../data/landingData";

export default function Footer() {
  const { footer, clientsSection, topBar } = landingData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.");
  };

  return (
    <footer id="contacto" className="w-full bg-brand-navy text-white pt-16 pb-6">
      <div className="w-full px-6 md:px-12 lg:px-12 flex flex-col gap-12">
        
        {/* Sección de Marcas / Clientes */}
        {clientsSection && (
          <div className="border-b border-neutral-800 pb-12">
            <span className="block text-center text-xs font-extrabold tracking-widest text-neutral-400 uppercase mb-8">
              {clientsSection.tag}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
              {clientsSection.items.map((client) => (
                <div key={client.id} className="flex items-center justify-center h-12 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {client.logoPath ? (
                    <img
                      src={client.logoPath}
                      alt={client.name}
                      className="max-h-12 md:max-h-14 w-auto object-contain"
                    />
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

        {/* Bloque Principal del Footer en una Sola Fila (Ocupa ancho completo) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-neutral-800">
          
          {/* Columna 1: ¿Tienes un proyecto en mente? (Caja Naranja integrada) */}
          <div className="bg-brand-orange text-white p-6 md:p-8 rounded-xl flex flex-col justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg md:text-xl font-black leading-tight uppercase">
                {footer.ctaBox.title}
              </h3>
              <p className="text-orange-100 text-xs md:text-sm leading-relaxed">
                {footer.ctaBox.subtitle}
              </p>
            </div>
            
            <a
              href={footer.ctaBox.whatsappBtn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy hover:bg-neutral-900 text-white font-bold text-xs py-3 px-5 rounded-md flex items-center justify-center gap-2 border border-neutral-800 transition-all duration-300 self-start shadow-sm"
            >
              {/* Icono WhatsApp */}
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="currentColor" />
              </svg>
              {footer.ctaBox.whatsappBtn.label}
            </a>
          </div>

          {/* Columna 2: Contáctanos */}
          <div className="flex flex-col gap-6 lg:border-r lg:border-neutral-800 lg:pr-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                {footer.contactInfo.title}
              </h4>
              <div className="w-8 h-0.5 bg-brand-orange rounded-full" />
            </div>
            
            <div className="flex flex-col gap-5 text-xs md:text-sm text-neutral-300 font-medium mt-2">
              <div className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.978 14.978 0 01-6.545-6.545l2.018-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{footer.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{footer.contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{footer.contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4.5 h-4.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
                <span>{footer.contactInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Columna 3: Envíanos un mensaje (Formulario) */}
          <div className="flex flex-col gap-6 lg:border-r lg:border-neutral-800 lg:pr-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                {footer.form.title}
              </h4>
              <div className="w-8 h-0.5 bg-brand-orange rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-xs md:text-sm mt-2">
              <input
                type="text"
                required
                placeholder={footer.form.fields.namePlaceholder}
                className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 rounded px-3 py-2.5 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <input
                type="email"
                required
                placeholder={footer.form.fields.emailPlaceholder}
                className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 rounded px-3 py-2.5 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <textarea
                required
                rows={3}
                placeholder={footer.form.fields.messagePlaceholder}
                className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 rounded px-3 py-2.5 focus:outline-none focus:border-brand-orange transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-2.5 px-4 rounded shadow-sm transition-all duration-300 tracking-wider self-start"
              >
                {footer.form.submitBtnLabel}
              </button>
            </form>
          </div>

          {/* Columna 4: Síguenos */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                {footer.socialsTitle}
              </h4>
              <div className="w-8 h-0.5 bg-brand-orange rounded-full" />
            </div>
            
            <div className="flex gap-3 mt-2">
              {topBar.socials.facebook && (
                <a
                  href={topBar.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-800 hover:bg-brand-orange rounded-full text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                  </svg>
                </a>
              )}
              {topBar.socials.tiktok && (
                <a
                  href={topBar.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-neutral-800 hover:bg-brand-orange rounded-full text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32">
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          
        </div>

        {/* Derechos de autor */}
        <div className="flex justify-center items-center text-xs text-neutral-500 pb-8 mt-4">
          <span>{footer.copyright}</span>
        </div>

      </div>
    </footer>
  );
}
