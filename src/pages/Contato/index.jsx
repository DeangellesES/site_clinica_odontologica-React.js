import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import styled from "styled-components";
import sorriso from "../../assets/imagens/sorriso.jpg"

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
    margin-bottom: 2rem;
`

// SECAO PARTE DE CIMA TOPO
const SecaoInicialCima = styled.section`
    background-image: url(${sorriso});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // padding-top: 5rem;
    height: 85vh;
    color: #fff;
`

const SecaoInicialCimaCaixa = styled.section`
    background-color: rgba(26, 17, 17, 0.25);
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
const Reservar = styled.a`
    background-color:rgb(29, 58, 116);
    width: 18%;
    // margin: 0 auto;
    padding: .6rem 1rem 1rem ;
    font-size: 1.6rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    // border: .1em solid #fff;
    border-radius: 3px;
    margin-top: 3rem;
    margin-left: 3rem;
    text-align: center;
`
// SECAO ASSINE NEWSLETTER
const SecaoAssineCaixa = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem; 
    align-items: center;
    margin-bottom: 10rem;
`
const SecaoInput = styled.input`
    padding: 1.2rem 2rem;
    height: 100%;
`
const SecaoReserveButton = styled.button`
    background-color: rgb(233, 146, 214);
    padding: 1.1rem;
    width: 20%;
    border: none;
    font-size: 1.3rem;
    font-weight: 600;
    color: rgb(83, 37, 43);
`

// SECAO ENTRE EM CONTATO
const SecaoContato = styled.section`
    background-color:rgb(129, 36, 36);
    padding: 1.5rem 0 4rem 0;
`

const SecaoContatoCaixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .7rem;
`
const SecaoContatoInput = styled.input`
    width: 30%;
    padding: 1rem;
`
const SecaoContatoTArea = styled.textarea`
    width: 30%;
    padding: 4rem;
`


function Contato() {
    return (
        <>
            <Cabecalho></Cabecalho>
            {/* INICIO SECAO PARTE DE CIMA PAGINA */}
            <SecaoInicialCima>
                <SecaoInicialCimaCaixa>
                    <SecaoInicialCimaCaixaTitulo>Conecte-se Conosco</SecaoInicialCimaCaixaTitulo>
                    <SecaoInicialCimaCaixaParagrafo>Siga-nos nas redes sociais e fique por dentro de todas as nossas novidades, dicas de saúde bucal e promoções exclusivas.</SecaoInicialCimaCaixaParagrafo>
                    <Reservar href="">Siga-nos</Reservar>
                </SecaoInicialCimaCaixa>
            </SecaoInicialCima>
            {/* FIM SECAO PARTE DE CIMA PAGINA */}

            {/* INICIO SECAO ASSINE */}
            <section>
                <TituloSecundarios>Assine Nossa Newsletter</TituloSecundarios>
                <ParagraTituloSecundarios>Receba informações valiosas, novidades e ofertas especiais direto no seu e-mail e não perca nada sobre nossos serviços.</ParagraTituloSecundarios>
                <SecaoAssineCaixa>
                    <SecaoInput type="name" placeholder="Nome" />
                    <SecaoInput type="email" placeholder="Email" />
                    <SecaoReserveButton href="">Enviar</SecaoReserveButton>
                </SecaoAssineCaixa>
            </section>
            {/* FIM SECAO ASSINE */}

            {/* INICIO SECAO ENTRE EM CONTATO */}
            <SecaoContato>
                <TituloSecundarios>Entre em Contato</TituloSecundarios>
                <ParagraTituloSecundarios>Estamos à disposição para esclarecer suas dúvidas, ouvir suas sugestões e proporcionar a melhor experiência em odontologia.</ParagraTituloSecundarios>
                <SecaoContatoCaixa>
                    <SecaoContatoInput type="text" placeholder="Nome" />
                    <SecaoContatoInput type="text" placeholder="Email"/>
                    <SecaoContatoTArea name="" id="" ></SecaoContatoTArea>
                    <SecaoReserveButton href="">Enviar</SecaoReserveButton>
                </SecaoContatoCaixa>
            </SecaoContato>
            {/* FIM SECAO ENTRE EM CONTATO */}
            <Rodape></Rodape>
        </>

    )
}

export default Contato