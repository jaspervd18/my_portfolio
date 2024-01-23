import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#F1F2F4]">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
