import CtaForm from "./CtaForm";

const CtaSection = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-10">
      <span className="text-balance text-6xl text-white font-bold">
        No matter where you are going to, we&apos;ll take you there
      </span>
      <CtaForm />
    </div>
  );
};

export default CtaSection;
