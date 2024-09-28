import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import FeaturedTrips from "@/components/FeaturedTripsSection";
import HeroSection from "@/components/HeroSection";
import IncludedInPackage from "@/components/IncludedInPackage";
import Newsletter from "@/components/NewsLetter";
import PackagesSection from "@/components/PackagesSection";
import PartnersSection from "@/components/Partners";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection id="hero" />
      <PartnersSection />
      <div className="border-b" />
      <FeaturedTrips id="services" />
      <WhyUs />
      <PackagesSection id="packages" />
      <IncludedInPackage />
      <AboutSection id="about-us" />
      <div className="container mx-auto py-10 grid md:grid-cols-[500px_1fr]">
        <FaqSection />
        <Newsletter />
      </div>
    </main>
  );
}
