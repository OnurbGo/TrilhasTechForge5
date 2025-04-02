import Contador from "../components/Contador";
import Saudacao from "../components/Saudacao";
import ToDoList from "../components/ToDoList";
import ToggleVisibilidade from "../components/ToggleVisibilidade";

const Home = () => {
  return (
    <div>
      Home
      <br />
      <Contador />
      <Saudacao />
      <ToDoList />
      <ToggleVisibilidade />
    </div>
  );
};

export default Home;
