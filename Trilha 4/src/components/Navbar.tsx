import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/rooms">Quartos Disponíveis</Link>
    </nav>
  );
};

export default Navbar;
