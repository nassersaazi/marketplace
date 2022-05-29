import { Routes, Route } from "react-router-dom";
import { Header, Home, Services, Service, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/:s_id" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
