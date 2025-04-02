import { Link } from "react-router";

const About = () => {
  return (
    <div>
      About EX1
      <nav>
        <Link to="/">Clique aqui para ir para Home</Link> |{" "}
        <Link to="/contact">Clique aqui para ir para Contact</Link>
      </nav>
    </div>
  );
};

export default About;
