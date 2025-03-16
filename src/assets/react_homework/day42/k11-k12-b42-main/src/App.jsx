import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Exercise6 from "./pages/Exercise6";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Exercise1 />} />
                <Route path="/exercise-2" element={<Exercise2 />} />
                <Route path="/exercise-3" element={<Exercise3 />} />
                <Route path="/exercise-4" element={<Exercise4 />} />
                <Route path="/exercise-5" element={<Exercise5 />} />
                <Route path="/exercise-6" element={<Exercise6 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
