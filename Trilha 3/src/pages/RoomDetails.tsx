import { useParams, useNavigate } from "react-router";

const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h1>Detalhes do Quarto {roomId}</h1>
      <p>Informações detalhadas sobre o quarto {roomId}.</p>
      <button onClick={handleBooking}>Reservar Agora</button>
    </div>
  );
};

export default RoomDetails;
