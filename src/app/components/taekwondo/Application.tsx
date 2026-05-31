import ApplicationForm from "@/app/components/ApplicationForm";
export default function Applications() {
  return <ApplicationForm defaultSport="taekwondo"
    locations={["Kakanj","Breza","Visoko","Kiseljak","Vareš"]}
    subtitle="Treninzi su dostupni u Visoku, Kaknju, Kiseljaku, Varešu i Brezi. Plaćanje se vrši na račun trenera nakon prijave." />;
}