import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIAssistant from "./components/AIAssistant";
import WhatsAppButton from "./components/WhatsAppButton";



function App() {
    return (
      
        <BrowserRouter>
        // Dentro de tu componente principal:
<WhatsAppButton />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <AIAssistant />
        </BrowserRouter>
    );
}

export default App;