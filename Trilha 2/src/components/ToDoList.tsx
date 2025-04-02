import { useState } from "react";

type ToDo = {
  name: string;
  done: boolean;
};

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [input, setInput] = useState<string>("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleToggleDone = (index: number) => {
    const updatedToDos = toDos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setToDos(updatedToDos);
  };

  const addToDo = () => {
    if (input.trim() === "") return;
    const newToDo: ToDo = {
      name: input,
      done: false,
    };
    setToDos([...toDos, newToDo]);
    setInput("");
  };

  return (
    <div>
      <input placeholder="Tarefa" value={input} onChange={onChangeInput} />
      <button onClick={addToDo}>Adicionar</button>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo.name} - {todo.done ? "Done" : "Pending"}
            <input
              type="button"
              value={todo.done ? "Mark as Pending" : "Mark as Done"}
              onClick={() => handleToggleDone(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
