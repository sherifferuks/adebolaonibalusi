import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TrustLogos />
      <Testimonials />
      {/* Footer will be added in layout.tsx */}
    </main>
  );
}
