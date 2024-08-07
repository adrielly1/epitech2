import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;
    h1 {
        margin: 80px  23%;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
    }

    p b {
        color: ${props => props.theme.negritoColor};
    }

    .container {
        display: flex;
        align-items: flex-start;
    }

    
`