import styled from "styled-components";

export const Conteudo = styled.main`
    font-family: Archivo Black;
    text-align: left;

    margin-bottom: 60px;

    h1 {
        margin-bottom: 110px;
        width: fit-content;
        padding: 10px;
        margin-inline: auto;
        margin-block: 50px;
    }

    h2 {
        margin: 20px;
        margin-left: 60px;
        margin-bottom: 0px;
        color: ${props => props.theme.titlePurple};
        font-size: 40px;
    }
    
    p {
        font-size: 25px;
        margin: 20px;
        margin-left: 60px;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        margin: 80px;
    }
    
    section div {
        text-align: justify;
        width: 50%;
    }
    
    section img {
        width: 300px;
    }

    @media screen and (max-width: 1020px){
        h1 {
            margin: 50px  35%;
        }

        h2 {
            margin-left: 0px;
            font-size: 30px;
            text-align: center;
            margin: 0;
        }

        p {
            font-size: 20px;
            margin-left: 0px;
            margin: 0;
        }

        section {
            flex-direction: column;
            gap: 30px;
            margin: 0 auto;
            margin-bottom: 40px;
        }

        section div {
            display: flex;
            flex-direction: column;
            text-align: justify;
            width: 80%;
            margin: 0 auto;
            gap: 20px;
        }

        section img {
            width: 300px;
        }
    }
`