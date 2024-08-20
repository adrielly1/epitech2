import styled from "styled-components";

export const Container = styled.main`
    .mobile-menu {
        display: flex;
        

    }

    button {
        background: none;
        border: none;
        border-radius: 10px;

        &:hover {
            background-color: ${props => props.theme.colorHover}
        }
    }

    button img {
        width: 50px;
    }

    .menu-icon.open {
        background-color: ${props => props.theme.titlePurple};
    }

    .nav {
        margin-left: -120px;
        padding: 5px;

        width: 40%;

        top: 60px;
        position: absolute;
        
        height:100%;
        
    }

    .nav.open {
        height: 100%;
        
    }

    .nav ul {
        padding: 10px;
        list-style-type: none;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${props => props.theme.titlePurple};
        border-radius: 30px;
    }

    .nav ul li {
        padding:5px;

        border-radius: 10px;

        &:hover {
            background-color: ${props => props.theme.colorHover};
        }
        
    }

    .nav ul li a {

        color: white;
        text-decoration: none;
        font-size: 18px;
    }


`