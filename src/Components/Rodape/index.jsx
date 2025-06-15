import styled from "styled-components";

const Paragrafo = styled.p`
    padding: 5rem 2rem;
    text-align: center;
    color: rgb(73, 69, 72);
    font-size: 1.3rem;
    font-weight: 600;
`

function Rodape () {
    return(
        <section>
            <Paragrafo>&copy;2025 Orgulhosamente criado por Felipe</Paragrafo>
        </section>
    )
}

export default Rodape