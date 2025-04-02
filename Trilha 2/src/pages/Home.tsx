import Contador from "../components/Contador";
import Saudacao from "../components/Saudacao";
import ToDoList from "../components/ToDoList";
import ToggleVisibilidade from "../components/ToggleVisibilidade";

const Home = () => {
  return (
    <div>
      <br />
      EX1
      <Contador />
      <br />
      EX2
      <Saudacao />
      <br />
      EX3
      <ToDoList />
      <br />
      EX4
      <ToggleVisibilidade />
    </div>
  );
};

export default Home;
