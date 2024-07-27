import styled from "styled-components";

export const Conteudo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    overflow-y: hidden;
    
    img {

        width: 100%;
        display: flex;
        padding: 0px;
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
        left: -30%; 
        font-family: Archivo;
        font-weight: bold;
        background-color: ${props=> props.theme.cardPurple};
        text-align: left;
        display: flex;
        padding: 30px;
        
    }

    .cardTwo {
        width: 20%;
        position: relative;
        top: -320px;
        left: 0; 
        font-family: Archivo;
        font-weight: bold;
        text-align: left;
        display: flex;
        padding: 38px;
    }

    .cardTree {
        width: 20%;
        position: relative;
        top: -720px;
        left: 30%; 
        font-family: Archivo;
        font-weight: bold;
        text-align: left;
        display: flex;
        padding: 45px;
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