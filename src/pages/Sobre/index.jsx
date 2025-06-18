import styled from "styled-components";
import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import consultorio from "../../assets/imagens/consultorio2.jpg"
import fachada from "../../assets/imagens/fachada-dentista.jpg"
import dentePrototipo from "../../assets/imagens/dente-prototipo.webp"
import garotoAtendido from "../../assets/imagens/garoto-cadeira-dentista.webp"
import pacienteTratando from "../../assets/imagens/paciente-tratando.webp"
import equipeDentistas from "../../assets/imagens/equipe-dentistas.webp"
import mostrandoEscova from "../../assets/imagens/mostrando-escova-paciente.webp"
import cadeiraJanela from "../../assets/imagens/cadeira-janela.webp"

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
const SecaoProfisionais = styled.section`
    background-color: rgb(68, 3, 14);
    padding: 2.7rem 0 4rem 0;
    margin-top: 5rem;
`

const SecaoProfisionaisTitulo = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
`

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

const SecaoProfissionaisCaixaTitulo = styled.h3`
    color: rgb(233, 146, 214);;
`

const SecaoProfissionaisCaixaDentroParagrafo = styled.p`
    margin-top: .7rem;
    color: #fff;
`

// SECAO PARTE DE BAIXO PAGINA
const SecaoParteBaixo = styled.section`
    padding: 10rem 3rem 5rem 3rem;
`

const SecaoParteBaixoCaixa = styled.div`
    display: grid;
    grid-template-columns: 60% 30%;
    margin-bottom: 3rem;
    gap: 2rem;
`

const SecaoParteBaixoCaixaImagem = styled.img`
    width: 100%;
    height: 450px;
`

const SecaoParteBaixoTitulo = styled.h1`
    font-size: 2.8rem;
    font-weight: 400;
    color: rgb(53, 51, 52);
    margin-bottom: 1.5rem;
`

const SecaoParteBaixoParagrafo = styled.p`
    font-size: 1.2rem;
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
            <SecaoProfisionais>
                <SecaoProfisionaisTitulo>Profissionais Dedicados</SecaoProfisionaisTitulo>
                <ParagraTituloSecundarios>Sua saúde bucal em boas mãos</ParagraTituloSecundarios>
                <SecaoProfissionaisCaixas>
                    <SecaoProfissionaisCaixa>
                        <SecaoProfissionaisImagem src={dentePrototipo} alt="" />
                        <SecaoProfissionaisCaixaDentro>
                            <SecaoProfissionaisCaixaTitulo>Dr. João Silva</SecaoProfissionaisCaixaTitulo>
                            <SecaoProfissionaisCaixaDentroParagrafo>Dentista especializado em ortodontia com mais de 10 anos de experiência. O Dr. João é apaixonado por transformar sorrisos e proporcionar confiança aos seus pacientes.</SecaoProfissionaisCaixaDentroParagrafo>
                        </SecaoProfissionaisCaixaDentro>
                    </SecaoProfissionaisCaixa>

                    <SecaoProfissionaisCaixa>
                        <SecaoProfissionaisImagem src={garotoAtendido} alt="" />
                        <SecaoProfissionaisCaixaDentro>
                            <SecaoProfissionaisCaixaTitulo>Dra. Maria Oliveira</SecaoProfissionaisCaixaTitulo>
                            <SecaoProfissionaisCaixaDentroParagrafo>Odontopediatra dedicada ao atendimento de crianças, sempre buscando tornar as visitas ao dentista uma experiência divertida e educativa.</SecaoProfissionaisCaixaDentroParagrafo>
                        </SecaoProfissionaisCaixaDentro>
                    </SecaoProfissionaisCaixa>

                    <SecaoProfissionaisCaixa>
                        <SecaoProfissionaisImagem src={pacienteTratando} alt="" />
                        <SecaoProfissionaisCaixaDentro>
                            <SecaoProfissionaisCaixaTitulo>Dr. Carlos Mendes</SecaoProfissionaisCaixaTitulo>
                            <SecaoProfissionaisCaixaDentroParagrafo>Cirurgião-dentista com especialização em implantodontia, o Dr. Carlos é conhecido por sua habilidade em procedimentos complexos e por seu cuidado excepcional com os pacientes.</SecaoProfissionaisCaixaDentroParagrafo>
                        </SecaoProfissionaisCaixaDentro>
                    </SecaoProfissionaisCaixa>
                </SecaoProfissionaisCaixas>
            </SecaoProfisionais>
            {/* FIM PROFISSIONAIS DEDICADOS */}

            {/* INICIO SECAO PARTE DE BAIXO DO SITE */}
            <SecaoParteBaixo>
                <SecaoParteBaixoCaixa>
                    <SecaoParteBaixoCaixaImagem src={equipeDentistas} alt="" />
                    <div>
                        <SecaoParteBaixoTitulo>Excelência no Atendimento</SecaoParteBaixoTitulo>
                        <SecaoParteBaixoParagrafo>Nosso foco é oferecer um atendimento de qualidade, onde cada paciente é tratado com respeito e atenção. Buscamos constantemente a melhoria de nossos serviços.</SecaoParteBaixoParagrafo>
                    </div>
                </SecaoParteBaixoCaixa>
                <SecaoParteBaixoCaixa>
                    <SecaoParteBaixoCaixaImagem src={mostrandoEscova} alt="" />
                    <div>
                        <SecaoParteBaixoTitulo>Transparência e Ética</SecaoParteBaixoTitulo>
                        <SecaoParteBaixoParagrafo>Acreditamos que a honestidade é fundamental. Nossos pacientes recebem informações claras sobre tratamentos e preços, garantindo uma relação de confiança.</SecaoParteBaixoParagrafo>
                    </div>
                </SecaoParteBaixoCaixa>
                <SecaoParteBaixoCaixa>
                    <SecaoParteBaixoCaixaImagem src={cadeiraJanela} alt="" />
                    <div>
                        <SecaoParteBaixoTitulo>Inovação e Tecnologia</SecaoParteBaixoTitulo>
                        <SecaoParteBaixoParagrafo>Estamos sempre atualizados com as últimas inovações na área odontológica, investindo em tecnologia para proporcionar os melhores e mais seguros tratamentos aos nossos pacientes.</SecaoParteBaixoParagrafo>
                    </div>
                </SecaoParteBaixoCaixa>
            </SecaoParteBaixo>
            {/* FIM SECAO PARTE DE BAIXO DO SITE */}

            <Rodape></Rodape>
        </>
    )
}

export default Sobre