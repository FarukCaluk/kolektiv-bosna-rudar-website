import About from "./components/About";
import Achievements from "./components/Achievements";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Achievements />
      <About />
    </div>
  );
}
