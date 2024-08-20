import styled from "styled-components";

export const Conteudo = styled.main`
    background-image: linear-gradient(to top left, #B185DB, #FFF);


    .title {
        padding-top: 80px;
    }
    h1 { 
        margin-bottom: 110px;
        width: 25%;
        margin-inline: 700px;
        
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        font-size: 40px;
        text-align: left;
        margin-bottom: 30px;
    }

    p {
        display: flex;
        align-items: center;
        font-size: 25px;
        gap: 10px;
    }

    a{
        text-decoration: none;
        color: ${props => props.theme.black};
    }

    section {
        display: flex;
        align-items: center;
        gap: 80px;
        margin-left: 350px;
        
    }

    .gap{
        gap: 20px;
    }

    .icons {
        width: 30px;
        background: none;
        margin-top: 0;
        padding: 0;
        border-radius: 0;
    }

    section img {
        width: 500px;
        margin-top: 50px;
        border-radius: 1500px;
        padding: 25px;
        background-color: ${props => props.theme.titlePurple};
    }

    section div {
        text-align: justify;
        width: 80%;
    }

    @media screen and (max-width: 1020px){
        .title {
        padding-top: 50px;
        }
        h1 { 
            margin-bottom: 20px;
            width: 60%;
            margin-inline: 75px;
            
        }

        h2 {
            font-size: 30px;
            text-align: center;
            margin-bottom: 30px;
        }

        p {
            font-size: 20px;
        }

        section {
            flex-direction: column;
            gap: 40px;
            margin-left: 0px;
            
        }
        section img {
            width: 250px;
            padding: 20px;
            
        }

        section div {
            text-align: center;
            margin: 0 auto;
            margin-bottom: 30px;
        }
        
    }
` 