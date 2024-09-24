import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/NewsLetter";
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
      <div className="container mx-auto py-10 grid md:grid-cols-[500px_1fr]">
        <FaqSection />
        <Newsletter />
      </div>
    </div>
  );
}
