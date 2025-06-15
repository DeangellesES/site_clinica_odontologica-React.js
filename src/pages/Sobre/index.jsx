import styled from "styled-components";
import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import consultorio from "../../assets/imagens/consultorio2.jpg"
import fachada from "../../assets/imagens/fachada-dentista.jpg"
import dentePrototipo from "../../assets/imagens/dente-prototipo.webp"
import garotoAtendido from "../../assets/imagens/garoto-cadeira-dentista.webp"
import pacienteTratando from "../../assets/imagens/paciente-tratando.webp"

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

// SECAO INICIAL TOPO
const SecaoInicial = styled.section`
    background-image: url(${consultorio});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // padding-top: 5rem;
    height: 85vh;
    color: #fff;
`

const SecaoInicialCaixa = styled.section`
    background-color: rgba(29, 17, 17, 0.34);
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

// SECAO TRAJETORIA
const SecaoTrajetoriaLink = styled.a`
    margin-left: 27rem;
    position: relative;
`

const SecaoTrajetoriaImagem = styled.img`
    width: 480px;
`

const SecaoTrajetoriaBaixo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    padding: 0 0 1.8rem 1.6rem;
   
`

const SecaoTrajetoriaTitulo = styled.h3`
     font-weight: 300;
`

const SecaoTrajetoriaParagrafo = styled.p`
    font-size: .8rem;
`

// PROFISSIONAIS DEDICADOS
const SecaoProfissionaisCaixas = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
    gap: .8rem;
    padding: 0 1rem 0 5rem;
`

const SecaoProfissionaisCaixa = styled.div`
    
`

const SecaoProfissionaisImagem = styled.img`
    width: 300px;
    height: 280px;
    margin-rigth: ;
`

const SecaoProfissionaisCaixaDentro = styled.div`
    width: 70%;
    text-align: center;
    padding: 0 0 0 1.5rem;
    margin-top: 1rem;
`
const SecaoProfissionaisCaixaDentroParagrafo = styled.p`
    margin-top: .7rem;
    color: rgb(73, 69, 72);
`

function Sobre() {
    return (
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO SECAO INICIAL */}
            <SecaoInicial>
                <SecaoInicialCaixa>
                    <SecaoInicialTitulo>Conheça a Odontologia</SecaoInicialTitulo>
                    <SecaoInicialParagrafo>Cuidando do seu sorriso com excelência</SecaoInicialParagrafo>
                </SecaoInicialCaixa>
            </SecaoInicial>
            {/* FIM SECAO INICIAL */}

            {/* INICIO SECAO TRAJETORIA */}
            <section>
                <TituloSecundarios>Nossa Trajetória</TituloSecundarios>
                <ParagraTituloSecundarios>Compromisso com a saúde bucal desde o início</ParagraTituloSecundarios>
                <SecaoTrajetoriaLink href="">
                    <SecaoTrajetoriaBaixo>
                        <SecaoTrajetoriaTitulo>A Fundação do Consultório</SecaoTrajetoriaTitulo>
                        <SecaoTrajetoriaParagrafo>13 de maio de 2025</SecaoTrajetoriaParagrafo>
                    </SecaoTrajetoriaBaixo>
                    <SecaoTrajetoriaImagem src={fachada} alt="" />
                </SecaoTrajetoriaLink>
            </section>
            {/* FIM SECAO TRAJETORIA */}

            {/* INICIO PROFISSIONAIS DEDICADOS */}
            <section>
                <TituloSecundarios>Profissionais Dedicados</TituloSecundarios>
                <ParagraTituloSecundarios>Sua saúde bucal em boas mãos</ParagraTituloSecundarios>
                <SecaoProfissionaisCaixas>
                    <SecaoProfissionaisCaixa>
                        <SecaoProfissionaisImagem src={dentePrototipo} alt="" />
                        <SecaoProfissionaisCaixaDentro>
                            <h3>Dr. João Silva</h3>
                            <SecaoProfissionaisCaixaDentroParagrafo>Dentista especializado em ortodontia com mais de 10 anos de experiência. O Dr. João é apaixonado por transformar sorrisos e proporcionar confiança aos seus pacientes.</SecaoProfissionaisCaixaDentroParagrafo>
                        </SecaoProfissionaisCaixaDentro>
                    </SecaoProfissionaisCaixa>

                    <SecaoProfissionaisCaixa>
                        <SecaoProfissionaisImagem src={garotoAtendido} alt="" />
                        <SecaoProfissionaisCaixaDentro>
                            <h3>Dra. Maria Oliveira</h3>
                            <SecaoProfissionaisCaixaDentroParagrafo>Odontopediatra dedicada ao atendimento de crianças, sempre buscando tornar as visitas ao dentista uma experiência divertida e educativa.</SecaoProfissionaisCaixaDentroParagrafo>
                        </SecaoProfissionaisCaixaDentro>
                    </SecaoProfissionaisCaixa>

                    <SecaoProfissionaisCaixa>
                        <SecaoProfissionaisImagem src={pacienteTratando} alt="" />
                        <SecaoProfissionaisCaixaDentro>
                            <h3>Dr. Carlos Mendes</h3>
                            <SecaoProfissionaisCaixaDentroParagrafo>Cirurgião-dentista com especialização em implantodontia, o Dr. Carlos é conhecido por sua habilidade em procedimentos complexos e por seu cuidado excepcional com os pacientes.</SecaoProfissionaisCaixaDentroParagrafo>
                        </SecaoProfissionaisCaixaDentro>
                    </SecaoProfissionaisCaixa>
                </SecaoProfissionaisCaixas>
            </section>
            {/* FIM PROFISSIONAIS DEDICADOS */}

            {/* INICIO SECAO PARTE DE BAIXO DO SITE */}
            <section>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                </div>
            </section>
            {/* FIM SECAO PARTE DE BAIXO DO SITE */}

            <Rodape></Rodape>
        </>
    )
}

export default Sobre