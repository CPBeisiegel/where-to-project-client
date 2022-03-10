import { Carrossel } from "../components/Carrossel";
import { HowTo } from "../components/HowTo";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Carrossel />
      <HowTo />
      <footer className="footer mt-auto py-3 bg-dark text-light text-end">
        {" "}
        <Link to="/sobre" className="text-decoration-none">
          {" "}
          <p className="me-5 text-light ">
            Criado por Camila Beisiegel e Danielle Nascimento
          </p>
        </Link>{" "}
        <p className="me-5">© 2022 where-to-project.com ™</p>{" "}
      </footer>
    </div>
  );
}

export default Home;
