import styled from "styled-components";

export const Conteudo = styled.main`
    h1{
        width: fit-content;
        margin-inline: auto;
        margin-block: 50px;
        padding: 10px;
    }
    h2 {
        color: ${props => props.theme.titlePurple};
        text-align: center;
        font-size: 35px;
        margin: 30px;
        margin-left: 60px;
    }
    h3 {
        font-size: 25px;
        text-align: center;
    }

    .vdd {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: auto;
        
    }


    .cardPurple {
        width: 30%;
        background-color: ${props => props.theme.cardPurple};
        color: ${props=> props.theme.white};
        margin-bottom: 0;
        padding: 20px;
        border-radius: 30px;
        text-align: justify;
    }

    .cardGrey {
        width: 30%;
        background-color: ${props => props.theme.cardGrey};
        color: ${props=> props.theme.white};
        padding: 20px;
        margin-bottom: 0;
        border-radius: 30px;
        text-align: justify;
    }

    p {
        text-align: justify;
        width: 70%;
    }

    

    p, ul{
        font-size: 25px;
        margin: 30px;
        margin-left: 60px;
    }
    
    .card {
        justify-content: center;
        display: flex;
        gap: 40px;
    }

    .tituloCards {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .card img {
        display: flex;
        width: 150px;
        justify-content: center;
        align-items: center;
    }

    .elements {
        margin: 0px;
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
        color: ${props => props.theme.white};
        padding: 40px;
        margin-left: 300px;
        margin-right: 300px;
        justify-content: center;
        gap: 20px;
        border-radius: 30px;
        margin-bottom: 60px;
        
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
        list-style: none;
    }


    img {
        display: flex;
        position: relative;
        
    }

    @media (max-width: 1020px){
        .backgroundTitle {
            font-size: 25px;
        }
        h1 {
            margin: 50px  25%;
            margin-bottom: 10px;
        }

        p, ul, h2{
            font-size: 20px;
            margin: 25px;
        
        }

        h3 {
            font-size: 30px;
            margin-bottom: 10px;
        }

        .vdd {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 400px;
            
        }
        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin: 0 auto;

            

        }

        .cardPurple {
            width: 90%;
            padding: 20px;


        }

        .tituloCards {
            flex-direction: column;
            text-align: center;
            gap: 0;
        }

        .cardGrey {
            width: 90%;
            padding: 20px;
        }

        .card img {
            width: 125px;
        }

        .elements {
            gap: 40px;
            padding: 10px;
            margin-bottom: 10px;
        }
        

        .elements img {
            width: 85px;
        }

        .sintomas {
            flex-direction: column;
            padding: 40px;
            margin-left: 0;
            margin-right: 0;
            gap: 20px;
            width: 90%;
            margin: 0 auto;
            margin-bottom: 60px;
        }

        ul {
            margin-left: 0;
        }
        
        .sintomas div {
            width: 100%;
        }

        .sintomas img {
            width: 60%;
        }
    }
`
