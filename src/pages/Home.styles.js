import styled from "styled-components";

export const Conteudo = styled.main`
    img {
        width: 100%;
        display: flex;
        padding: 10px 0;
    }

    h1 {
        color: ${props => props.theme.white};
        position: absolute;
        top: 30%;
        left: 30%; 
        transform: translate(-50%, -50%); 
        font-size: 50px;
        font-weight: bold;
        font-family: Black Han Sans;
        text-shadow: 2px 2px 4px #000000;  
    }
    h2 {
        font-family: Archivo;
        font-size: 40px;
        color: ${props => props.theme.titlePurple};
        width: 30%;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
    }

    p {
        color: ${props => props.theme.black};
        font-size: 30px;
        width: 30%;
        align-items: center;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        padding-top: 0px;
    }

    .cardOne {
        width: 20%;
        position: relative;
        top: 80px;
        left: 10%; 
        font-family: Archivo;
        font-weight: bold;
        background-color: ${props=> props.theme.cardPurple};
        text-align: left;
        display: flex;
        padding: 23px;
        
    }

    .cardTwo {
        width: 20%;
        position: relative;
        top: -280px;
        left: 40%; 
        font-family: Archivo;
        font-weight: bold;
        text-align: left;
        display: flex;
        padding: 25px;
    }

    .cardTree {
        width: 20%;
        position: relative;
        top: -660px;
        left: 70%; 
        font-family: Archivo;
        font-weight: bold;
        text-align: left;
        display: flex;
        padding: 40px;
    }

    .textgrey {
        color: ${props => props.theme.titleGrey};
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;

    }

    .cardPurple {
        background-color: ${props=> props.theme.cardPurple};
    }

    .cardGrey {
        background-color: ${props => props.theme.cardGrey};
    }

    .banner {
        width: 35%;
        color: ${props => props.theme.white};
        position: absolute;
        top: 40%;
        left: 10%; 
        font-size: 45px; 
        font-weight: bold;
        text-shadow: 2px 2px 4px #000000; 
        
    }
`