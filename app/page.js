import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import PartnersSection from "@/components/Partners";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <PackagesSection />
      <FaqSection />
    </div>
  );
}
