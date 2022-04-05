// Styling
import "./css/app.css";

// Imports
import { Routes, Route } from "react-router-dom";

// Pages / Routes
import Home from "./pages/home";
import OtherPage from "./pages/otherpage";

// Components
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </div>
  );
}

export default App;
