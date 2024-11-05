import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;
    h1 {
        margin: 80px  23%;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        font-size: 40px;
        margin: 20px;
        margin-left: 60px;
    }

    p b {
        color: ${props => props.theme.negritoColor};
    }
    p {
        text-align: justify;
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }

    section {
        justify-content: center;
        gap: 40px;
        margin-bottom: 40px;
        padding: 40px;
        display: flex;
        align-items: center;
    }
        
    
    section div {
        width: 850px;
    }

    section img {
        width: 400px;
    }
    
    .titleCinza {
        color: ${props => props.theme.titleLilas};
    }

    .cardCinza {
        background-color: ${props => props.theme.cardPurple};
        padding: 100px;
    }

    .cardCinza p {
        color: ${props=> props.theme.white};
    }

    @media screen and (max-width: 1020px) {
        h1 {
            margin: 50px  10%;
        }

        h2 {
            font-size: 30px;
            margin-left: 0px;
            text-align: center;
        }

        p {
            font-size: 20px;
            margin-left: 0px;
        }

        section {
            flex-direction: column;
            gap: 35px;
            margin-bottom: 30px;
        }

        section div {
            width: 325px;
            margin: 0 auto;
        }

        section img {
            width: 300px;
        }

        .cardCinza {
            padding: 40px;
            margin: 0 auto;
        }

        .cardCinza div {
            width: 325px;
            margin: 0 auto;
        }
    }

    
`