import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;
    h1 {
        margin: 80px  23%;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        font-size: 40px;
        margin: 20px;
        margin-left: 60px;
    }

    p b {
        color: ${props => props.theme.negritoColor};
    }
    p {
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }

    section {
        justify-content: center;
        gap: 40px;
        margin-bottom: 40px;
        padding: 40px;
        display: flex;
        align-items: center;
    }
        
    
    section div {
        max-width: 1000px;
    }

    section img {
        width: 400px;
    }
    
    .titleCinza {
        color: ${props => props.theme.titleGrey};
    }

    .cardCinza {
        background-color: ${props => props.theme.cardPurple};
        padding: 100px;
    }

    
`