import { createGlobalStyle } from "styled-components"

export const GlobalStytle = createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: "Archivo", sans-serif;
    }

    :root {
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        background: ${props => props.theme.white};
    }

    .text {
        display: flex;
        justify-content: center;
    }

    .backgroundTitle {
        color: ${props=> props.theme.white};
        background-color: ${props => props.theme.baseColor};
        padding: 0;
        border-radius: 15px;

        font-size: 52px;
        font-family: Archivo Black;
        text-align: center;
    }

    @media screen and (max-width:1020px) {
        .backgroundTitle {
            font-size: 25px;
        }
    }
`