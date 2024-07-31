import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;
    h1{
        margin: 80px  40%;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        text-align: center;
        margin: 30px;
    }
    p, ul, h2, h3{
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }

    ul {
        margin-left: 100px;

    }
    
    .Card {
        background-color: ${props => props.theme.cardPurple};
        width: 30%;  
        display: flex;
        justify-content: center;
    }


    .imgOne {
        display: flex;
        justify-content: center;
    }
`