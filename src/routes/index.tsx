import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiagnosticsSection from "@/components/DiagnosticsSection";
import PortfolioSection from "@/components/PortfolioSection";
import StabilitySection from "@/components/StabilitySection";
import EMobilitySection from "@/components/EMobilitySection";
import EpcSection from "@/components/EpcSection";
import RoiSection from "@/components/RoiSection";
import ContactSection from "@/components/ContactSection";

const title = "Sincro Energía S.A.S. | Energías renovables y convencionales sincronizadas";
const description =
  "Sincro Energía S.A.S. — Energías renovables y convencionales sincronizadas. Fotovoltaico, eólico, mareomotriz, almacenamiento, KVAR y movilidad eléctrica en Colombia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
