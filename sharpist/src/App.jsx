import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categories from "./components/Categories/Categories";
import Business from "./components/Business/Business";
import Teach from "./components/Teach/Teach";
import TestAi from "./pages/TestAi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/business" element={<Business />} />
      <Route path="/teach" element={<Teach />} />
      <Route path="/maketest" element={<TestAi />} />
    </Routes>
  );
}

export default App;
