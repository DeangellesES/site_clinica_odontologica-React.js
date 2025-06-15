import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Agendamento from "./pages/Agendamento";
import Contato from "./pages/Contato";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/servicos" element={<Servicos/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/agendamento" element={<Agendamento/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes