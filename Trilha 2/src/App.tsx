import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
