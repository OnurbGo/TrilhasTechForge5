import { Link } from "react-router";

const Rooms = () => {
  const rooms = [
    { id: 1, name: "Quarto Standard" },
    { id: 2, name: "Quarto Deluxe" },
    { id: 3, name: "Quarto Premium" },
  ];

  return (
    <div>
      <h1>Lista de Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
