import { Link } from "react-router";

const Contact = () => {
  return (
    <div>
      Contact EX1
      <nav>
        <Link to="/">Clique aqui para ir para Home</Link> |{" "}
        <Link to="/about">Clique aqui para ir para About</Link>
      </nav>
    </div>
  );
};

export default Contact;
