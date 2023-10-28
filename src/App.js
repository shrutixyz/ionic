import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Experiments from "./pages/Experiments/Experiments";
import Room from "./pages/Room/Room";
import Perform from "./pages/Perform/Perform";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./pages/NotFound/NotFound";
import Redirect from "./pages/NotFound/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/room" element={<Room />} />
        <Route path="/perform/:id" element={<Perform />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Redirect/>} />
        <Route path="/404/:id" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
