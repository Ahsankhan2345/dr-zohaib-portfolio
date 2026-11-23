import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <main className="w-full m-0 p-0">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}