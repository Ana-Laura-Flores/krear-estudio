import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIAssistant from "./components/AIAssistant";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <AIAssistant />
        </BrowserRouter>
    );
}

export default App;