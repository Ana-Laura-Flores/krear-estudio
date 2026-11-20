import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIAssistant from "./components/AIAssistant";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from '@vercel/analytics/react';



function App() {
    return (
      
        <BrowserRouter>
        
<WhatsAppButton />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <AIAssistant />
            <Analytics />
        </BrowserRouter>
    );
}

export default App;