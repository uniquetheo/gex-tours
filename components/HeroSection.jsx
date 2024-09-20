import CtaSection from "./CtaSection";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className="bg-hero-image h-screen w-full pt-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        <NavBar />
        <CtaSection />
        <div />
      </div>
    </div>
  );
};

export default HeroSection;
