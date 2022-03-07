import { NavbarExterna } from "../components/Navbar";
import { Carrossel } from "../components/Carrossel";
import { HowTo } from "../components/HowTo";

export function Home() {
  return (
    <div>
      <NavbarExterna />
      <Carrossel />
      <HowTo />
    </div>
  );
}

export default Home;
