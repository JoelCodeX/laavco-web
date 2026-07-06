import { landingData } from "../data/landingData";

export default function StatsBar() {
  const { stats } = landingData;

  // Mapa de iconos a SVGs inline
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return (
          <svg className="w-8 h-8 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        );
      case "user":
        return (
          <svg className="w-8 h-8 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        );
      case "globe":
        return (
          <svg className="w-8 h-8 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
          </svg>
        );
      case "phone":
        return (
          <svg className="w-8 h-8 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6M9.75 14.25h4.5m-4.5 0v4.5m0-4.5l-6 6m6-10.5h.008v.008H9.75V9.75zm0 4.5h.008v.008H9.75v-.008zm4.5 0h.008v.008h-.008v-.008zm0-4.5h.008v.008h-.008V9.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12.75a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-brand-orange shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <section className="w-full bg-brand-navy text-white py-4 md:py-5 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-neutral-800">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex items-center gap-4 ${
              index > 0 ? "pt-4 sm:pt-0 sm:mt-0" : ""
            } ${
              index > 0 ? "lg:pl-8" : ""
            }`}
          >
            {getIcon(stat.iconName)}
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight leading-tight">
                {stat.title}
              </span>
              <span className="text-sm text-neutral-400 font-medium">
                {stat.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
