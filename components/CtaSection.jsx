import CtaForm from "./CtaForm";

const CtaSection = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-10 px-4 sm:px-8">
      <span className="text-balance text-3xl sm:text-4xl lg:text-6xl w-[350px] md:w-[400px] lg:w-full text-earthly-green font-bold  backdrop:blur">
        No matter where you are going to, we&apos;ll take you there
      </span>
      <CtaForm />
    </div>
  );
};

export default CtaSection;
