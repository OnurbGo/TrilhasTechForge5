import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Animal from "./pages/Animal";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" Component={Animal} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
