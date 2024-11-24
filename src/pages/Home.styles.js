import styled from "styled-components";

import imgHome from "../assets/imgHomee.jpg"

import imgHomeMb  from "../assets/imgHome-mobile.png"



export const Conteudo = styled.div`
    background-image: linear-gradient(to top, #B185DB, #FFF);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;


    

    h1 {
        color: ${props => props.theme.white};
        font-size: 50px;
        font-weight: bold;
        font-family: Black Han Sans;
        text-shadow: 2px 2px 4px #000000;  
    }
    .banner {
        width: 700px;
        color: ${props => props.theme.white};
        font-family: Archivo Black;
        font-size: 45px; 
        font-weight: bold;
        text-shadow: 2px 2px 4px #000000; 
        
    }

    .flex {
        background-image: url(${imgHome});
        width: 100%;
        background-size: cover;
        padding-bottom: 250px;
        padding-top:200px;
        padding-left: 200px ;

        display: flex;
        flex-direction: column;
        }

    
    h3 {
        font-family: Archivo Black;
        font-size: 40px;
        color: ${props => props.theme.titlePurple};
    }
    

    p {
        color: ${props => props.theme.white};
        font-size: 30px;
    }

    .aligm{
        display: flex;
        justify-content: center;
        font-family: Archivo Black;
        font-weight: bold;
        gap: 40px;
        width: fit-content;
        margin-block: 60px;
    }

    .aligm div{
        width: 30%; 
        padding: 20px; 
        margin: 40px;
        display: flex;
        flex-direction: column; 
        justify-content: space-between; 
        min-height: 250px;
    }


    .textgrey {
        color: ${props => props.theme.titleLilas};
    }

    .cardPurple {
        background-color: ${props=> props.theme.cardPurple};
        border-radius: 30px;

    }


    .diferente {
        margin-top: 15px;
    }


    .cardGrey {
        background-color: ${props => props.theme.cardGrey};
        border-radius: 30px;

    }

    

    @media screen and (max-width: 1020px) {
        img {
            display: none;
        }
        .mobile {
            display: flex;
        }

        .flex {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url(${imgHomeMb});
            width: 100%;
            background-size: cover;
            padding-bottom: 100px;
            padding-top:60px;
            padding-left: 0 ;


            }

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;            
            text-align: center;
            font-size: 30px;
            width: 70%;
        }

        .banner {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 20px;
            width: 74%;
        }

        .aligm {
            flex-direction: column;
            max-width: 80%;
            gap: 50px;
        }

        .aligm div {
            width: 85%;
            margin: 0 auto;
        }

        .cardGrey p {
            margin-top: 10px;
        }
        .cardPurple p {
            margin-top: 10px;
        }

        h3{
            font-size: 28px;
        }

        p{
            font-size: 20px;
        }
    }

    
`