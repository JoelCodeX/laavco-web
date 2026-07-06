import { landingData } from "../data/landingData";

export default function Hero() {
  const { hero } = landingData;

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-[calc(100vh-184px)] flex items-center justify-start bg-neutral-950 text-white overflow-hidden py-8 md:py-10 lg:py-12 px-6 md:px-12 lg:px-24"
    >
      {/* Imagen de fondo / Degradado de respaldo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 select-none scale-105"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(9, 18, 35, 0.95) 20%, rgba(9, 18, 35, 0.8) 50%, rgba(9, 18, 35, 0.4) 100%), url('/hero.png')`,
          backgroundColor: "#091223", // Color de respaldo oscuro
        }}
      />

      {/* Efectos de luz decorativos en el fondo */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl flex flex-col items-start gap-3 md:gap-4 animate-fadeIn">
        <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          Construcción, Metalmecánica y Equipos
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md max-w-3xl">
          SOLUCIONES INTEGRALES EN{" "}
          <span className="text-brand-orange">CONSTRUCCIÓN</span>,{" "}
          <span className="text-brand-orange">METALMECÁNICA</span> Y{" "}
          <span className="text-white border-b-4 border-brand-orange pb-1">
            ALQUILER DE EQUIPOS
          </span>{" "}
          PARA TRABAJOS EN ALTURA.
        </h1>

        <p className="text-base md:text-lg text-neutral-300 font-medium max-w-2xl leading-relaxed mt-1 drop-shadow">
          {hero.subtitle}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-3">
          {/* Botón WhatsApp */}
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg shadow-brand-orange/30 transform hover:-translate-y-0.5 text-base"
          >
            {/* SVG WhatsApp */}
            <svg
              className="w-5.5 h-5.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.428 2.025 13.99 1 12.003 1c-5.439 0-9.865 4.37-9.87 9.8-.002 1.761.464 3.479 1.349 5.025l-1.023 3.733 3.832-.992.056-.038zm11.838-8.212c-.225-.112-1.328-.656-1.533-.731-.205-.075-.354-.112-.503.112-.149.224-.577.731-.707.882-.13.15-.26.168-.485.056-.225-.112-.949-.349-1.808-1.116-.668-.596-1.12-1.332-1.251-1.556-.131-.224-.014-.346.098-.458.101-.1.225-.262.338-.393.112-.131.15-.224.224-.374.075-.15.038-.281-.019-.393-.056-.112-.503-1.212-.689-1.66-.181-.435-.363-.377-.502-.384-.13-.007-.279-.008-.429-.008-.15 0-.393.056-.599.28-.206.225-.785.767-.785 1.871 0 1.104.804 2.17 1.01 2.451.206.281 1.584 2.419 3.837 3.393.536.231.954.369 1.279.473.539.171 1.03.147 1.417.09.431-.064 1.328-.543 1.516-1.068.188-.524.188-.974.131-1.068-.056-.094-.205-.15-.43-.262z" />
            </svg>
            <span>{hero.primaryCta.label}</span>
          </a>

          {/* Botón Solicitar Cotización */}
          <a
            href={hero.secondaryCta.href}
            className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md border-2 border-white transition-colors duration-300 text-base"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
