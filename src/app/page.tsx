import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Insights } from "@/components/sections/Insights";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <VideoShowcase />
      <Insights />
      <Pricing />
    </main>
  );
}
