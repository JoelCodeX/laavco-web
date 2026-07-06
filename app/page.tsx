import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      {/* Header / Navegación */}
      <Header />
      
      {/* Contenido Principal */}
      <main className="flex-grow">
        {/* Banner Hero */}
        <Hero />
        
        {/* Pilares / Estadísticas */}
        <StatsBar />
        
        {/* Servicios */}
        <Services />
        
        {/* Alquiler de Equipos */}
        <Equipment />
        
        {/* ¿Por Qué Elegirnos? */}
        <WhyChooseUs />
        
        {/* Proyectos Realizados */}
        <Projects />
      </main>
      
      {/* Footer y Sección de Contacto */}
      <Footer />
    </div>
  );
}
