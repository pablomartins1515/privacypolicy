import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Event } from './pages/Event';
import { Politica } from './pages/Politica';

export function Router() {
    return (
            <Routes>
/                <Route path="/" element={<Politica />} />            
            </Routes>
    )
}