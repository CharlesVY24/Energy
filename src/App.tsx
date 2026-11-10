import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DiagnosticsSection from '@/components/DiagnosticsSection';
import PortfolioSection from '@/components/PortfolioSection';
import StabilitySection from '@/components/StabilitySection';
import EMobilitySection from '@/components/EMobilitySection';
import EpcSection from '@/components/EpcSection';
import RoiSection from '@/components/RoiSection';
import ContactSection from '@/components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <DiagnosticsSection />
        <PortfolioSection />
        <StabilitySection />
        <EMobilitySection />
        <EpcSection />
        <RoiSection />
      </main>
      <ContactSection />
    </div>
  );
}

export default App;
