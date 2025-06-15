import { Link } from "react-router-dom";
import styled from "styled-components";
// import estilos from "./estilos"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-itens: center;
    padding: 1rem;
    background:rgb(248, 224, 247);
    position: fixed;
    width: 100%;
    z-index: 10;
`

const Titulo = styled.h1`
    font-weight: 400;
    text-decoration: none;
`

const Navegacao = styled.nav`
    margin-top: 1rem;
`
const Lista = styled.ul`
    display: flex;
    list-style: none;
    align-itens: center;
    gap: 2rem;
    color: red;
    font-weight: 700;
`

function Cabecalho() {
    return(
        <Header>
            <Link to="/" className="titulo"><Titulo>Clínica Odontologica</Titulo></Link>
            
            <Navegacao>
                <Lista>
                    <Link to="/" className="links">Início</Link>
                    <Link to="/servicos" className="links">Serviços</Link>
                    <Link to="/sobre" className="links">Sobre Nós</Link>
                    <Link to="/agendamento" className="links">Agendamento</Link>
                    <Link to="/contato" className="links">Contato</Link>
                </Lista>
            </Navegacao>
        </Header>
    )
}

export default Cabecalho