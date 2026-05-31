import ApplicationForm from "@/app/components/ApplicationForm";
export default function Application_mma() {
  return <ApplicationForm defaultSport="mma"
    locations={["Visoko","Kakanj","Breza"]}
    subtitle="MMA treninzi su dostupni u Visoku, Kaknju i Brezi. Plaćanje se vrši na račun trenera nakon prijave." />;
}