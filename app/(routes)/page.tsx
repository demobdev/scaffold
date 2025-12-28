import { HeroSection } from "@/components/landing/hero-section";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Navbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeatureGrid />
    </main>
  );
}
