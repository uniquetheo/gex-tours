import CtaSection from "./CtaSection";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className="bg-hero-image h-[calc(100vh-100px)] lg:h-screen w-full pt-8">
      <div className="container mx-auto flex flex-col justify-between h-full">
        <NavBar />
        <CtaSection />
        <div />
      </div>
    </div>
  );
};

export default HeroSection;
