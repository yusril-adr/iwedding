import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Catalogue from "./components/pages/Catalogue";
import About from "./components/pages/About";
import BottomNav from "./components/utils/BottomNav";

const App = () => {
  return (
    <div>
      <div style={{
        marginBottom: '6rem',
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <BottomNav />
    </div>
  );
}

export default App;
