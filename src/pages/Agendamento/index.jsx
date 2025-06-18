import styled from "styled-components";
import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import agendando from "../../assets/imagens/agendando.jpg"
import dentistaBarba from "../../assets/imagens/dentista-paciente-barba.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

//GERAL
const TituloSecundarios = styled.h1`
    font-size: 2.3rem;
    text-align: center;
    font-weight: 400;
    margin-top: 5rem;
`
const ParagraTituloSecundarios = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: rgb(233, 146, 214);
    padding: 1rem 0 4rem 0;
`

// SECAO PARTE DE CIMA TOPO
const SecaoInicialCima = styled.section`
    background-image: url(${agendando});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // padding-top: 5rem;
    height: 85vh;
    color: #fff;
`

const SecaoInicialCimaCaixa = styled.section`
    background-color: rgba(26, 17, 17, 0.23);
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    gap: 1.2rem;
    padding: 0 0 0 3rem;
    text-align: start;
`

const SecaoInicialCimaCaixaTitulo = styled.section`
    font-size: 2.8rem;
    font-weight: 600;
`
const SecaoInicialCimaCaixaParagrafo = styled.section`
    font-size: 1.3rem;
`
// SECAO RESERVE CONSULTA
const SecaoReserve = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 0 15rem 0 8rem;
    gap: 1rem;
`

const SecaoReserveImagem = styled.img`
    width: 90%;
`
const SecaoReserveParagrafoCima = styled.p`
    font-size: 1.2rem;
    color: rgb(73, 69, 72);
    margin-top: 1rem;
    line-height: 1.4;
`
const SecaoReserveTextoCaixa = styled.div`
    display: flex;
    gap: .7rem;
`
const SecaoReserveCampoData = styled.input`
    width: 100%;
    padding: .8rem .5rem;
    margin: 1.4rem 0 .8rem 0;
    color: rgb(95, 90, 94);
`
const SecaoReserveParagrafoBaixo = styled.p`
    font-weight: 500;
    color: rgb(95, 90, 94);
    line-height: 1.6;
`
const SecaoReserveButton = styled.button`
    background-color: rgb(233, 146, 214);
    padding: 1.5rem;
    width: 100%;
    border: none;
    font-size: 1.3rem;
    margin-top: 1rem;
    font-weight: 600;
    color: rgb(83, 37, 43);
`

function Agendamento() {
    return (
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO SECAO PARTE DE CIMA PAGINA */}
            <SecaoInicialCima>
                <SecaoInicialCimaCaixa>
                    <SecaoInicialCimaCaixaTitulo>Agende sua consulta com facilidade</SecaoInicialCimaCaixaTitulo>
                    <SecaoInicialCimaCaixaParagrafo>Sua saúde bucal em primeiro lugar</SecaoInicialCimaCaixaParagrafo>
                </SecaoInicialCimaCaixa>
            </SecaoInicialCima>
            {/* FIM SECAO PARTE DE CIMA PAGINA */}

            {/* INICIO SECAO RESERVE CONSULTA*/}
            <section>
                <TituloSecundarios>Reserve sua consulta agora</TituloSecundarios>
                <ParagraTituloSecundarios>A saúde do seu sorriso começa aqui</ParagraTituloSecundarios>
                <SecaoReserve>
                    <SecaoReserveImagem src={dentistaBarba} alt="" />
                    <div>
                        <h2>Agendamento Rápido</h2>
                        <SecaoReserveTextoCaixa>
                            <FontAwesomeIcon className="aspas" icon={faQuoteRight} />
                            <SecaoReserveParagrafoCima>Nosso sistema de agendamento é simples e eficiente. Você pode escolher a data e horário que melhor se adequam à sua rotina, garantindo que seu atendimento seja realizado no momento mais conveniente para você.</SecaoReserveParagrafoCima>
                        </SecaoReserveTextoCaixa>
                        <SecaoReserveCampoData type="datetime-local" placeholder="Selecione data e hora"/>
                        <SecaoReserveParagrafoBaixo>Fuso horário do evento:</SecaoReserveParagrafoBaixo>
                        <SecaoReserveParagrafoBaixo>Asia/Shanghai GMT+08:00</SecaoReserveParagrafoBaixo>
                        <SecaoReserveButton href="">Reservar Agora</SecaoReserveButton>
                    </div>
                </SecaoReserve>
            </section>
            {/* FIM SECAO RESERVE CONSULTA*/}

            {/* INICIO SECAO HORARIOS ATENDIMENTO*/}
            <section>
                <TituloSecundarios>Nossos horários de atendimento</TituloSecundarios>
                <ParagraTituloSecundarios>Estamos prontos para cuidar do seu sorriso</ParagraTituloSecundarios>
                <div>
                    <div>
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="Email"/>
                        <textarea name="" id="" placeholder="Mensagem"></textarea>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <p>123 Sunnyvale Rd, San Jose California, United States</p>
                        <p>Seg-Sex 10 am-5pm, sáb 1 pm-5pm</p>
                        <p>415-111-2233</p>
                    </div>
                </div>
            </section>
            {/* FIM SECAO HORARIOS ATENDIMENTO*/}
            <Rodape></Rodape>
        </>

    )
}

export default Agendamento