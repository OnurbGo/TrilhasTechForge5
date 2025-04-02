import { useParams } from "react-router";

const Animal = () => {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <h1>O nome do animal é: {name}</h1>
    </div>
  );
};

export default Animal;
