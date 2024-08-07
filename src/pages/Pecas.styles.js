import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;
    text-align: left;

    h1 {
        margin: 80px  43%;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        font-size: 40px;
        margin: 20px;
        margin-left: 60px;
        text-align: left;
        margin-bottom: 50px;
    }
    
    p {
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        margin: 80px;
    }
    
    section div {
        max-width: 1000px;
    }
    
    section img {
        width: 600px;
    }
`