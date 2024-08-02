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
    p,h2{
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }

    h3 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        color: ${props => props.theme.titleGrey};
    }

    ul {
        font-size: 30px;
        text-align: left;
        margin-left: 80px;
    }
    ul li {
        margin-bottom: 20px;
        list-style-type: circle;
    }
    
    .Card {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.cardPurple};
        width: 50%;        
        padding: 30px;
        border-radius: 20px;
        margin: 20px;
        left: 24%;
    }

    .Card div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .Card img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
    }

    .imgOne {
        display: flex;
        justify-content: center;
    }
`