import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;

    
    h1{
        margin-bottom: 110px;
        width: fit-content;
        padding: 10px;
        margin-inline: auto;
        margin-block: 50px;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        text-align: center;
        margin: 30px;
        font-size: 35px;
    }

    p {
        text-align: justify;
        width: 70%;
        margin: 0px;
        font-size: 25px;
    }

    p,h2{
        
        margin-bottom: 15px;
        margin-left: 60px;
    }

    h3 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        color: ${props => props.theme.white};
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
        color: ${props => props.theme.white};
        width: 50%;        
        padding: 30px;
        border-radius: 20px;
        margin: 20px;
        left: 24%;

        margin-bottom: 50px;
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
        height: 500px;
        margin-inline: auto;
    }

    @media screen and (max-width:1020px) {
        
        h1 {
            margin: 50px  25%;
            margin-bottom: 10px;
        }

        h2 {
            text-align: center;
            margin: 20px 2%;
        }

        p,h2{
            font-size: 20px;
            margin-left: 0px;
        }

        h3 {
            font-size: 25px;
        }

        ul {
            font-size: 25px;
            margin-left: 10px;
            width: 100%;
        }
        ul li {
            margin-bottom: 20px;
        }
        
        .imgOne {
            margin: 40px;
        }

        .imgOne img {
            width: 300px;
        }

        .Card {

            flex-direction: column;
            width: 80%;        
            margin: 0 auto;
            left: 0%;
            margin-bottom: 60px;
        }

        .Card img {
            width: 300px;
        }
    }
`