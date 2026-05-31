import ApplicationForm from "@/app/components/ApplicationForm";
import SectionReveal from "@/app/components/SectionReveal";

export default function MembershipPage() {
  return (
    <div className="bg-[#07090F] text-white min-h-screen pt-10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-4">
        <SectionReveal>
          <span className="block w-10 h-[2px] bg-[#D42020] mb-5" />
          <h1 className="bebas text-[clamp(3rem,8vw,7rem)] leading-none text-white mb-3">Postani član</h1>
          <p className="text-white/40 text-sm mb-4 max-w-lg">
            Pridruži se Kolektivu Bosna Rudar i otkrij sport koji te inspiriše.
          </p>
        </SectionReveal>
      </div>
      <ApplicationForm
        title="Prijava u klub"
        subtitle="Odaberi lokaciju i disciplinu. Kontaktirat ćemo te s detaljima o prvom treningu."
        locations={["Kakanj","Breza","Visoko","Kiseljak","Vareš"]}
      />
    </div>
  );
}