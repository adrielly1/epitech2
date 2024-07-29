import styled from "styled-components";

export const Conteudo = styled.main`
    h1 {
        font-size: 50px;
        font-family: Archivo Black;
        text-align: center;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        text-align: center;
    }
    h3 {
        font-size: 25px;
    }

    .cardPurple {
        position: relative;
        width: 30%;
        background-color: ${props => props.theme.cardPurple};
        left: 20%;
        padding: 49px;
        margin-bottom: 0;
    }

    .cardGrey {
        position: relative;
        width: 30%;
        background-color: ${props => props.theme.cardGrey};
        left: 50%;
        bottom: 272px;
        padding: 20px;
        margin-bottom: 0;
    } 

    p, ul, h2{
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }
    
    ul {
        margin-left: 100px;
        list-style: none;
    }


    img {
        display: flex;
        position: relative;
        left: 39%;
        
    }
`