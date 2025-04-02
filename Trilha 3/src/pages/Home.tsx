import { Link, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div>
      Home EX1
      <nav>
        <Link to="/about">Clique aqui para ir para About</Link>
        <Link to="/contact">Clique aqui para ir para Contact</Link>
        <a href="/contact">Clique aqui para ir para Contact</a>
        <br />
        <button onClick={handleNavigate}>Clique aqui para ir para About</button>
        <br />
        <h1>Bem-vindo ao Sistema de Reservas de Hotel</h1>
        <nav>
          <Link to="/rooms">Ver Quartos Disponíveis</Link>
        </nav>
      </nav>
      <br />
    </div>
  );
};

export default Home;
