import styled from "styled-components";

export const Conteudo = styled.main`
    h1{
        margin: 80px  34%;
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
        margin-bottom: 0;
        padding: 20px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        text-align: left;
    }

    .cardGrey {
        position: relative;
        width: 30%;
        background-color: ${props => props.theme.cardGrey};
        padding: 20px;
        margin-bottom: 0;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        text-align: left;
    }

    p {
        text-align: left;
    }

    p, ul, h2{
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }
    
    .card {
        justify-content: center;
        display: flex;
        gap: 0px;
    }

    .elements {
        margin: 30px;
        justify-content: center;
        display: flex;
        gap: 300px;
        background-color: ${props => props.theme.cardPurple};
        padding: 20px;
    }

    .elements img {
        width: 150px;
        height: auto;
    }

    .sintomas {
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.cardPurple};
        padding: 40px;
        margin-left: 300px;
        margin-right: 300px;
        justify-content: center;
        gap: 20px;
        border-radius: 30px;
    }

    .sintomas img {
        width: 40%;
        height: auto;
    }

    .sintomas div ul li {
        margin-bottom: 10px;
        margin-left: 0;
        text-align: left;
    }
    .sintomas div {
        width: 50%;
    }

    ul {
        margin-left: 100px;
        list-style: none;
    }


    img {
        display: flex;
        position: relative;
        
    }
`