import styled from "styled-components";

import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import dentesClareados from "../../assets/imagens/dentes-clareados.webp"
import implantes from "../../assets/imagens/implantes-dentario.webp"
import tratamentoCanal from "../../assets/imagens/tratamento-canal.webp"
import pacienteCrianca from "../../assets/imagens/paciente-cadeira.webp"
import doutora from "../../assets/imagens/dentista-doutora.webp"
import equipe from "../../assets/imagens/equipe.webp"
import paciente from "../../assets/imagens/paciente-em-tratamento-odontologico.jpg"
import dentistaPaciente from "../../assets/imagens/dentista-paciente.webp"
import dentistaTela from "../../assets/imagens/dentistaTela.webp"
import cadeiraDentista from "../../assets/imagens/cadeira-desntista.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//INICIO RESERVAR
const SecaoInicial = styled.div`
    background-image: url(${paciente});
    background-size: 1400px 550px;
    background-repeat: no-repeat;
    height: 85vh;
    background-position: end;
    color: #fff;
    text-align: start;
    // padding-top: 3rem;
`

const SecaoInicialCaixa = styled.div`
    background-color: rgba(29, 17, 17, 0.51);
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    gap: 1.2rem;
`

const SecaoInicialParagrafo = styled.p`
    font-size: 1.5rem;
    margin-left: 3rem;
`

const SecaoInicialTitulo = styled.h2`
    font-size: 2rem;
    margin-left: 3rem;
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

//PRINCIPAL SWIPER
const SecaoCarrocel = styled.section`
    display: flex;
    background-color:rgb(129, 36, 36);
    padding: 5rem 0;
    height: 120vh;
`

const CaixaUm = styled.div`
    width: 50%;
    display: flex;
    // align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding: 2.1rem 0 0 4rem; 
`

const CaixaDois = styled.div`
    width: 50%;
    text-align: end;
    padding: 1rem 5rem 3rem 0;
`
const SecaoCarrocelTitulo = styled.h1`
    font-size: 2.3rem;
    color: #fff;
    overflow-wrap: break-word;
    line-height: 1.3;
`
const SecaoCarrocelParagrafo = styled.p`
    color: #fff;
    font-size: 1.3rem;
    margin: 1.5rem 0;
`
const Link = styled.a`
    color: #000;
    background-color: rgb(250, 142, 201);
    width: 23%;
    text-align: center;
    padding: .7rem 2rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1.2rem;
`

const SecaoCarrocelImagem = styled.img`
    height: 110%;
    width: 85%;
    
`
//Secao dois
const SecaoDoisCaixaUm = styled.div`
    width: 43%;
    display: flex;
    // align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding: 2.1rem 0 0 4rem; 
`

const SecaoDoisLink = styled.a`
    color: #000;
    background-color: rgb(250, 142, 201);
    width: 32%;
    text-align: center;
    padding: .7rem 2rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1.2rem;
`

//SERVICOS
const ContainerServicos = styled.section`
    display: grid;
    padding: 5rem 3rem;
    gap: 2.3rem;
`

const ServicoTitulo = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
`

const ServicoParagrafoCima = styled.p`
    color: rgb(250, 142, 201);
    font-size: 1.3rem;
    text-align: center;
    margin: 0 0 2.4rem;
`

const Caixa = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
`

const ImagemBloco = styled.img`
    width: 90%;
    height: 300px;
`
const CaixaLado = styled.div`
    display: grid;
    gap: 1rem;
`
const ParagrafoCaixaLado = styled.p`
    color: #4d4d4d;
    font-weight: 600;
`

const ServicoButton = styled.a`
    text-decoration: none;
    background-color: rgb(250, 142, 201);
    width: 20%;
    padding: .8rem 1rem;
    color: #000;
    font-weight: 600;
    text-align: center;
`

//OPNIOES
const Container = styled.section`
    background-color: rgb(68, 3, 14);
    color: #fff;
    text-align: center;
    padding: 4rem 1rem 6rem 1rem;
    display: grid;
`

const Titulo = styled.h1`
    font-size: 2rem;
    font-weight: 400; 
`

const ParagrafoCima = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    margin: 1rem 0 4rem;
`

const CaixaMeio = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    // gap: 5rem;
`

const CaixaDentro = styled.div`
    // display: grid;
    // gap: 1rem;
    width: 100%;
`

const Imagem = styled.img`
    width: 90%;
    height: 500px;
    margin-bottom: 1rem;
`

const ParagrafoDentro = styled.p`
    margin: 2rem 0;
`

const Button = styled.a`
    width: 30%;
    background-color: rgb(250, 142, 201);
    color: #000;
    text-decoration: none;
    padding: .7rem 2rem;
    font-weight: 700;
`

function Inicio() {
    return (
        <>
            <Cabecalho></Cabecalho>
            <SecaoInicial>
                <SecaoInicialCaixa>
                    <SecaoInicialParagrafo>Cuidando do seu sorriso com excelência e dedicação.</SecaoInicialParagrafo>
                    <SecaoInicialTitulo>Bem-vindo à Clínica Odontologica</SecaoInicialTitulo>
                    <Reservar href="">Reservar Agora</Reservar>
                </SecaoInicialCaixa>
            </SecaoInicial>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <SecaoCarrocel>
                        <CaixaUm>
                            <SecaoCarrocelTitulo>Atendimento</SecaoCarrocelTitulo>
                            <SecaoCarrocelTitulo>Personalizado</SecaoCarrocelTitulo>
                            <SecaoCarrocelParagrafo>Oferecemos um atendimento individualizado, onde cada paciente é tratado com atenção e cuidado. Nossos profissionais estão sempre prontos para ouvir suas necessidades e oferecer o melhor tratamento.</SecaoCarrocelParagrafo>
                            <Link href="">Descubra</Link>
                        </CaixaUm>
                        <CaixaDois>
                            <SecaoCarrocelImagem src={dentistaPaciente} alt=""/>
                        </CaixaDois>
                    </SecaoCarrocel>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoCarrocel>
                        <CaixaDois>
                            <SecaoCarrocelImagem src={dentistaTela} alt="" />
                        </CaixaDois>
                        <SecaoDoisCaixaUm>
                            <SecaoCarrocelTitulo>Tecnologia Avançada</SecaoCarrocelTitulo>
                            <SecaoCarrocelParagrafo>Utilizamos equipamentos modernos e técnicas inovadoras para garantir um tratamento eficaz e confortável. A tecnologia está a serviço da sua saúde bucal e do seu bem-estar.</SecaoCarrocelParagrafo>
                            <SecaoDoisLink href="">Saiba Mais</SecaoDoisLink>
                        </SecaoDoisCaixaUm>
                    </SecaoCarrocel>
                </SwiperSlide>
                <SwiperSlide>
                    <SecaoCarrocel>
                        <SecaoDoisCaixaUm>
                            <SecaoCarrocelTitulo>Equipe Especializada</SecaoCarrocelTitulo>
                            <SecaoCarrocelParagrafo>Utilizamos equipamentos modernos e técnicas inovadoras para garantir um tratamento eficaz e confortável. A tecnologia está a serviço da sua saúde bucal e do seu bem-estar.</SecaoCarrocelParagrafo>
                            <SecaoDoisLink href="">Connheça</SecaoDoisLink>
                        </SecaoDoisCaixaUm>
                        <CaixaDois>
                            <SecaoCarrocelImagem src={cadeiraDentista} alt="" />
                        </CaixaDois>
                    </SecaoCarrocel>
                </SwiperSlide>
            </Swiper>

            <ContainerServicos>
                <ServicoTitulo>Serviços Odontológicos</ServicoTitulo>
                <ServicoParagrafoCima>Oferecemos uma ampla gama de serviços para atender todas as suas necessidades.</ServicoParagrafoCima>
                <Caixa>
                    <div>
                        <ImagemBloco src={dentesClareados} alt="" />
                    </div>
                    <CaixaLado>
                        <h3>Clareamento Dental</h3>
                        <ParagrafoCaixaLado>O clareamento dental é um procedimento que visa melhorar a estética do sorriso. Utilizamos técnicas seguras e eficazes que garantem resultados visíveis em pouco tempo, proporcionando um sorriso mais branco e radiante.</ParagrafoCaixaLado>
                        <ServicoButton href="">Ver Detalhes</ServicoButton>
                    </CaixaLado>
                </Caixa>
                <Caixa>
                    <div>
                        <ImagemBloco src={implantes} alt="" />
                    </div>
                    <CaixaLado>
                        <h3>Implantes Dentários</h3>
                        <ParagrafoCaixaLado>Os implantes dentários são uma solução eficaz para a substituição de dentes perdidos. Eles oferecem uma base sólida para dentes artificiais, garantindo funcionalidade e estética, permitindo que você sorria com confiança novamente.</ParagrafoCaixaLado>
                        <Button href="">Saiba Mais</Button>
                    </CaixaLado>

                </Caixa>
                <Caixa>
                    <div>
                        <ImagemBloco src={tratamentoCanal} alt="" />
                    </div>
                    <CaixaLado>
                        <h3>Tratamento de Canal</h3>
                        <ParagrafoCaixaLado>O tratamento de canal é essencial para salvar dentes comprometidos por cáries ou infecções. Nossa equipe realiza o procedimento com cuidado e precisão, aliviando a dor e preservando seu dente natural.</ParagrafoCaixaLado>
                        <Button href="">Entenda</Button>
                    </CaixaLado>

                </Caixa>
            </ContainerServicos>

            <Container>
                <Titulo>Opiniões de Nossos Pacientes</Titulo>
                <ParagrafoCima>Veja o que nossos pacientes têm a dizer sobre a experiência no nosso consultório</ParagrafoCima>
                <CaixaMeio>
                    <CaixaDentro>
                        <Imagem src={pacienteCrianca} alt="" />
                        <h2>Excelente Atendimento!</h2>
                        <ParagrafoDentro>Os profissionais são extremamente atenciosos e me ajudaram a superar meu medo de dentista. Recomendo a todos!</ParagrafoDentro>
                        <Button href="">Ler Mais</Button>
                    </CaixaDentro>
                    <CaixaDentro>
                        <Imagem src={doutora} alt="" />
                        <h2>Resultados Incríveis!</h2>
                        <ParagrafoDentro>Fiz o clareamento dental e fiquei muito satisfeito com o resultado. Meu sorriso nunca esteve tão bonito!
                        </ParagrafoDentro>
                        <Button href="">Veja Mais</Button>
                    </CaixaDentro>
                    <CaixaDentro>
                        <Imagem src={equipe} alt="" />
                        <h2>Profissionais Competentes!</h2>
                        <ParagrafoDentro>A equipe é muito bem preparada e sempre disposta a esclarecer dúvidas. Sinto-me seguro em cada consulta.</ParagrafoDentro>
                        <Button href="">Confira</Button>
                    </CaixaDentro>
                </CaixaMeio>
            </Container >
            <Rodape></Rodape>
        </>
    )
}

export default Inicio