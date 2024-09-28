import CtaForm from "./CtaForm";

const CtaSection = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-10 px-4 sm:px-8">
      <span className="text-balance font-poppins text-3xl sm:text-4xl lg:text-5xl w-[370px] md:w-[450px] lg:w-full text-black font-bold  backdrop:blur">
        Discover Ghana with <span className="text-earthly-green">GEX</span>.
        <p className="text-2xl mt-2 font-normal">
          No matter where you are going to, we&apos;ll take you there
        </p>
      </span>
      <CtaForm />
    </div>
  );
};

export default CtaSection;
