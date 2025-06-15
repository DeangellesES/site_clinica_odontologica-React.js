import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import styled from "styled-components";
import dentistaLonge from "../../assets/imagens/dentista-longe.jpg"
import consertandoDente from "../../assets/imagens/consertando-dente.webp"
import restauracaoDentista from "../../assets/imagens/restauracao-dentistas.webp"
import ortodontia from "../../assets/imagens/ortodontia.webp"
import pacoteBasico from "../../assets/imagens/pacote-basico.png"
import pacoteIntermediario from "../../assets/imagens/pacote-intermediario.png"
import pacoteAvancado from "../../assets/imagens/pacote-avancado.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

// SECAO INICIAL TOPO
const SecaoInicial = styled.section`
    background-image: url(${dentistaLonge});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // padding-top: 5rem;
    height: 85vh;
    color: #fff;
`

const SecaoInicialCaixa = styled.section`
    background-color: rgba(29, 17, 17, 0.51);
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    gap: 1.2rem;
    padding: 0 0 0 3rem;
`
const SecaoInicialTitulo = styled.h1`
    font-size: 2.5rem;
`

const SecaoInicialParagrafo = styled.p`
    font-size: 1.3rem;
`

// SECAO SERVICOS
const SecaoServico = styled.section`
    padding: 4rem 2.5rem 8rem;
`
const TituloSecundarios = styled.h1`
    font-size: 2.3rem;
    text-align: center;
    font-weight: 400;
`
const ParagraTituloSecundarios = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: rgb(233, 146, 214);
    padding: 1rem 0 4rem 0;
`
const ServicosCaixa = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 3rem;
    margin-top: 1rem;
`
const ServicoImagem = styled.img`
    width: 100%;
`
const ServicosCaixaDentro = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    gap: 1rem;
`

const ServicosCaixaDentroTitulo = styled.h2`
    color: rgb(36, 34, 35);
`
const ServicosCaixaDentroParagrafo = styled.p`
    color: rgb(73, 69, 72);
`

// SECAO TABELA PRECOS
const SecaoPrecosCaixa = styled.div`
    display: flex;
    justify-content: center;
`
const SecaoPrecosCaixaDentro = styled.div`
    width: 20%;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: solid 1px rgb(206, 195, 202);
    padding: 2.5rem 2rem;
    margin-top: 35px;
`

const SecaoPrecosCaixaDentroTitulo = styled.h3`
    padding: 1.5rem 0 2.3rem 0;
    font-weight: 500;
`
const SecaoPrecosCaixaDentroParagrafo = styled.p`
    color: rgb(233, 146, 214);
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0 0 1.2rem 0;
`

const SecaoPrecosCaixaDentroBotao = styled.a`
    background-color: rgb(233, 146, 214);
    width: 70%;
    padding: .6rem 0rem;
    text-decoration: none;
    color: rgb(32, 24, 31);
    margin: 0 0 1rem 26px;
`

const SecaoPrecosCaixaDentroParagrafoBaixo = styled.p`
    color: rgb(73, 69, 72);
    line-height: 1.3;
`

const SecaoPrecosCaixaDentroDiferente = styled.div`
    width: 20%;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: solid 2px rgb(233, 146, 214);
    padding: 2.5rem 2rem;
`
const SecaoPrecosCaixaDentroDiferenteRecomendado = styled.span`
    padding: .6rem 0rem;
    background-color: rgb(233, 146, 214);
    margin: -2.5rem 0 2.2rem 1.7rem;
    width: 70%;
`

// SECAO PERGUNTAS
const SecaoPerguntas = styled.section`
    padding: 6rem 4rem;
`
const SecaoPerguntasCaixa = styled.div`
    border-bottom: 1px solid #000;
    padding: 1.5rem
`
const SecaoPerguntasTitulo = styled.h4`
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
`

const SecaoPerguntasCaixaPrimeiro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SecaoPerguntasParagrado = styled.p`
    color: rgb(73, 69, 72);
    font-weight: 600;
`

function Servicos() {
    return (
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO TOPO DA PAGINA */}
            <SecaoInicial>
                <SecaoInicialCaixa>
                    <SecaoInicialTitulo>Nossos Serviços Odontológicos</SecaoInicialTitulo>
                    <SecaoInicialParagrafo>Cuidamos do seu sorriso com excelência</SecaoInicialParagrafo>
                </SecaoInicialCaixa>
            </SecaoInicial>
            {/* FIM TOPO DA PAGINA */}

            {/* INICIO SECAO SERVICO DA PAGINA */}
            <SecaoServico>
                <TituloSecundarios>Tratamentos de Qualidade para Seu Sorriso</TituloSecundarios>
                <ParagraTituloSecundarios>Descubra nossos serviços especializados em odontologia.</ParagraTituloSecundarios>
                <ServicosCaixa>
                    <ServicoImagem src={consertandoDente} alt="" />
                    <ServicosCaixaDentro>
                        <ServicosCaixaDentroTitulo>Limpeza Dental</ServicosCaixaDentroTitulo>
                        <ServicosCaixaDentroParagrafo>A limpeza dental é essencial para manter a saúde bucal. Nossos profissionais realizam uma limpeza profunda, removendo placas e tártaro, prevenindo cáries e doenças gengivais. Realizamos também uma orientação sobre cuidados diários para garantir um sorriso saudável.</ServicosCaixaDentroParagrafo>
                    </ServicosCaixaDentro>
                </ServicosCaixa>
                <ServicosCaixa>
                    <ServicosCaixaDentro>
                        <ServicosCaixaDentroTitulo>Restaurações</ServicosCaixaDentroTitulo>
                        <ServicosCaixaDentroParagrafo>Oferecemos restaurações de alta qualidade para dentes danificados por cáries ou traumas. Utilizamos materiais estéticos que se integram ao seu sorriso, proporcionando uma aparência natural. Nossos dentistas estão prontos para restaurar a funcionalidade e a estética do seu sorriso.</ServicosCaixaDentroParagrafo>
                    </ServicosCaixaDentro>
                    <ServicoImagem src={restauracaoDentista} alt="" />
                </ServicosCaixa>
                <ServicosCaixa>
                    <ServicoImagem src={ortodontia} alt="" />
                    <ServicosCaixaDentro>
                        <ServicosCaixaDentroTitulo>Ortodontia</ServicosCaixaDentroTitulo>
                        <ServicosCaixaDentroParagrafo>Nossos tratamentos de ortodontia ajudam a corrigir a posição dos dentes e melhorar a mordida. Oferecemos opções como aparelhos metálicos e alinhadores invisíveis, adequados a diferentes idades e necessidades. Acreditamos que um sorriso alinhado é um sorriso saudável.</ServicosCaixaDentroParagrafo>
                    </ServicosCaixaDentro>
                </ServicosCaixa>
            </SecaoServico>
            {/* FIM SECAO SERVICO DA PAGINA */}

            {/* INICIO SECAO TABELA PRECOS DA PAGINA */}
            <section>
                <TituloSecundarios>Tabela de Preços</TituloSecundarios>
                <ParagraTituloSecundarios>Transparência nos preços dos nossos tratamentos.</ParagraTituloSecundarios>
                <SecaoPrecosCaixa>
                    <SecaoPrecosCaixaDentro>
                        <img src={pacoteBasico} alt="" />
                        <SecaoPrecosCaixaDentroTitulo>Pacote Básico</SecaoPrecosCaixaDentroTitulo>
                        <SecaoPrecosCaixaDentroParagrafo>$15,000.00</SecaoPrecosCaixaDentroParagrafo>
                        <SecaoPrecosCaixaDentroBotao href="">Selecionar</SecaoPrecosCaixaDentroBotao>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Limpeza dental</SecaoPrecosCaixaDentroParagrafoBaixo>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Orientação sobre cuidados</SecaoPrecosCaixaDentroParagrafoBaixo>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Check-up inicial</SecaoPrecosCaixaDentroParagrafoBaixo>
                    </SecaoPrecosCaixaDentro>
                    <SecaoPrecosCaixaDentroDiferente>
                        <SecaoPrecosCaixaDentroDiferenteRecomendado>Recomendado</SecaoPrecosCaixaDentroDiferenteRecomendado>
                        <img src={pacoteIntermediario} alt="" />
                        <SecaoPrecosCaixaDentroTitulo>Pacote Intermediário</SecaoPrecosCaixaDentroTitulo>
                        <SecaoPrecosCaixaDentroParagrafo>$40,000.00</SecaoPrecosCaixaDentroParagrafo>
                        <SecaoPrecosCaixaDentroBotao href="">Selecionar</SecaoPrecosCaixaDentroBotao>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Limpeza dental</SecaoPrecosCaixaDentroParagrafoBaixo>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Restauração de até 2 dentes</SecaoPrecosCaixaDentroParagrafoBaixo>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Check-up completo</SecaoPrecosCaixaDentroParagrafoBaixo>
                    </SecaoPrecosCaixaDentroDiferente>
                    <SecaoPrecosCaixaDentro>
                        <img src={pacoteAvancado} alt="" />
                        <SecaoPrecosCaixaDentroTitulo>Pacote Avançado</SecaoPrecosCaixaDentroTitulo>
                        <SecaoPrecosCaixaDentroParagrafo>$15,000.00</SecaoPrecosCaixaDentroParagrafo>
                        <SecaoPrecosCaixaDentroBotao href="">Selecionar</SecaoPrecosCaixaDentroBotao>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Limpeza dental</SecaoPrecosCaixaDentroParagrafoBaixo>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Restauração de até 4 dentes</SecaoPrecosCaixaDentroParagrafoBaixo>
                        <SecaoPrecosCaixaDentroParagrafoBaixo>Tratamento ortodontia inicial</SecaoPrecosCaixaDentroParagrafoBaixo>
                    </SecaoPrecosCaixaDentro>
                </SecaoPrecosCaixa>
            </section>
            {/* FIM SECAO TABELA PRECOS DA PAGINA */}

            {/* INICIO SECAO PERGUNTAS DA PAGINA */}

            <SecaoPerguntas>
                <TituloSecundarios>Perguntas Frenquentes</TituloSecundarios>
                <ParagraTituloSecundarios>Esclareça suas dúvidas sobre nossos serviços.</ParagraTituloSecundarios>
                <SecaoPerguntasCaixa>
                    <SecaoPerguntasCaixaPrimeiro>
                        <SecaoPerguntasTitulo>Com que frequência devo fazer limpeza dental?</SecaoPerguntasTitulo>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </SecaoPerguntasCaixaPrimeiro>
                    <SecaoPerguntasParagrado>Recomendamos que as limpezas dentais sejam feitas a cada seis meses. Isso ajuda a prevenir problemas dentários e a manter a saúde bucal em dia. Em casos de problemas específicos, pode ser necessário realizar limpezas mais frequentes.</SecaoPerguntasParagrado>
                </SecaoPerguntasCaixa>
                <SecaoPerguntasCaixa>
                    <SecaoPerguntasCaixaPrimeiro>
                        <SecaoPerguntasTitulo>Os tratamentos odontológicos são dolorosos?</SecaoPerguntasTitulo>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </SecaoPerguntasCaixaPrimeiro>
                    <SecaoPerguntasParagrado>A maioria dos tratamentos é realizada com anestesia local para garantir o conforto do paciente. Após o procedimento, pode ocorrer um leve desconforto, mas isso é normal e geralmente passa em poucos dias. Nossos dentistas estão sempre à disposição para tirar dúvidas.</SecaoPerguntasParagrado>
                </SecaoPerguntasCaixa>
                <SecaoPerguntasCaixa>
                    <SecaoPerguntasCaixaPrimeiro>
                        <SecaoPerguntasTitulo>Qual a idade ideal para iniciar o tratamento ortodontia?</SecaoPerguntasTitulo>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </SecaoPerguntasCaixaPrimeiro>
                    <SecaoPerguntasParagrado>O tratamento ortodontia pode começar a partir dos 7 anos, quando os primeiros dentes permanentes estão começando a surgir. No entanto, cada caso é único, e nossas consultas podem ajudar a determinar o melhor momento para iniciar o tratamento.</SecaoPerguntasParagrado>
                </SecaoPerguntasCaixa>
            </SecaoPerguntas>

            {/* FIM SECAO PERGUNTAS DA PAGINA */}
            
            <Rodape></Rodape>
        </>
    )
}

export default Servicos