// Styling
import "./css/app.css";

// Imports
import { Routes, Route } from "react-router-dom";

// Pages / Routes
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
