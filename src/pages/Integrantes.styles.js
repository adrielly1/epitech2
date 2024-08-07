import styled from "styled-components";

export const Conteudo = styled.main`
    h1 {
        margin: 80px 38%;
    }

    h2 {
        color: ${props => props.theme.titlePurple};
        font-size: 40px;
        text-align: left;
        margin-bottom: 30px;
    }

    p {
        font-size: 25px;
    }

    a{
        text-decoration: none;
        color: ${props => props.theme.black};
    }

    section {
        display: flex;
        align-items: center;
        gap: 80px;
        margin: 150px;
        margin-left: 350px;
    }

    section img {
        width: 500px;
    }


` 