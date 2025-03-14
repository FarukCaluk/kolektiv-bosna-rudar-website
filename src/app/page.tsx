import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Sports from "./components/Sports";

export default function Home() {
  return (
    <div>
      <Header />
      <Achievements />
      <About />
      <Sports />
      <Locations />
      <Contact />
    </div>
  );
}
