import styled from "styled-components";
import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import agendando from "../../assets/imagens/agendando.jpg"
import dentistaBarba from "../../assets/imagens/dentista-paciente-barba.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faLocationDot, faClock, faMobileScreen } from "@fortawesome/free-solid-svg-icons"

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

// SECAO AGENDAMENTO HORARIOS
const SecaoAtendimento = styled.section`
    background-color:rgb(129, 36, 36);
    padding: .5rem;
    margin-top: 5rem;
`
const SecaoAgendamento = styled.div`
    display: grid;
    grid-template-columns: 28% 28% 28%;
    justify-content: center;
    gap: 1.6rem;
    margin-bottom: 7rem;
`
const SecaoAgendamentoCaixaInput = styled.div`
    display: grid;
    gap: 1rem;
`
const SecaoAgendamentoInput = styled.input`
    width: 100%;
    padding: .8rem;
`
const SecaoAgendamentoTextArea = styled.textarea`
    width: 100%;
    padding: 3rem 0;
`
const SecaoAgendamentoAncora = styled.a`
    text-decoration: none;
    background-color: rgb(233, 146, 214);
    width: 35%;
    color: #000;
    padding: 1rem 1rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
`
const SecaoAgendamentoCaixaParagrafo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const SecaoAgendamentoCaixaParagrafoDentro = styled.div`
    display: flex;
    gap: .6rem;
    align-items: center;
`
const SecaoAgendamentoParagrafo = styled.p`
    font-size: 1.5rem;
    color: rgb(22, 21, 22);
    font-weight: 600;
`
const SecaoAgendamentoMapa = styled.iframe`
    width: 100%;
    heigth: 60%;
    border: none;
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
            <SecaoAtendimento>
                <TituloSecundarios>Nossos horários de atendimento</TituloSecundarios>
                <ParagraTituloSecundarios>Estamos prontos para cuidar do seu sorriso</ParagraTituloSecundarios>
                <SecaoAgendamento>
                    <SecaoAgendamentoCaixaInput>
                        <SecaoAgendamentoInput type="text" placeholder="Nome"/>
                        <SecaoAgendamentoInput type="text" placeholder="Email"/>
                        <SecaoAgendamentoTextArea name="" id="" ></SecaoAgendamentoTextArea>
                        <SecaoAgendamentoAncora href="">Enviar</SecaoAgendamentoAncora>
                    </SecaoAgendamentoCaixaInput>

                    <div>
                        <SecaoAgendamentoMapa src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12698.561856681566!2d-122.033602!3d37.27995200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e4ad38fa6a251%3A0x4462135701bcadcb!2sSaratoga%20Sunnyvale%20Rd%2C%20Saratoga%2C%20CA%2095070!5e0!3m2!1spt-BR!2sus!4v1750715430621!5m2!1spt-BR!2sus" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></SecaoAgendamentoMapa>
                    </div>

                    <SecaoAgendamentoCaixaParagrafo>
                        <SecaoAgendamentoCaixaParagrafoDentro>
                            <FontAwesomeIcon className="agendamentoIcones" icon={faLocationDot} />
                            <SecaoAgendamentoParagrafo>123 Sunnyvale Rd, San Jose California, United States</SecaoAgendamentoParagrafo>
                        </SecaoAgendamentoCaixaParagrafoDentro>
                        <SecaoAgendamentoCaixaParagrafoDentro>
                            <FontAwesomeIcon className="agendamentoIcones" icon={faClock} />
                            <SecaoAgendamentoParagrafo>Seg-Sex 10 am-5pm, sáb 1 pm-5pm</SecaoAgendamentoParagrafo>
                        </SecaoAgendamentoCaixaParagrafoDentro>
                        <SecaoAgendamentoCaixaParagrafoDentro>
                            <FontAwesomeIcon className="agendamentoIcones" icon={faMobileScreen} />
                            <SecaoAgendamentoParagrafo>415-111-2233</SecaoAgendamentoParagrafo>
                        </SecaoAgendamentoCaixaParagrafoDentro>
                    </SecaoAgendamentoCaixaParagrafo>
                </SecaoAgendamento>
            </SecaoAtendimento>
            {/* FIM SECAO HORARIOS ATENDIMENTO*/}
            <Rodape></Rodape>
        </>

    )
}

export default Agendamento