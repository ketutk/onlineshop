import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/main-components/landingpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
