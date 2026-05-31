import ApplicationForm from "@/app/components/ApplicationForm";
export default function Application() {
  return <ApplicationForm defaultSport="kickboxing"
    locations={["Kakanj"]}
    subtitle="Kickboxing treninzi su dostupni u Kaknju. Plaćanje se vrši na račun trenera nakon prijave." />;
}