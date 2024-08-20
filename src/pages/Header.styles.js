import styled from "styled-components";

export  const CardContainer = styled.header`
    background: ${props => props.theme.cardPurple};
    width: 100%;
    height: 90px; 
    z-index: 1000;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: center;

    div {
        display: none;
    }

    @media screen and (max-width: 1020px){
        flex-direction: row-reverse;
        justify-content: center;
        

        div {
            display: flex;
            margin-right: -30px;
            
        }

    }


    
`
export const IconHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    

    
    

    @media (max-width: 1000px) {
        img {
            display: flex;
            align-items: center;
            
        }
    }
    
`
export const NavHeader = styled.nav`


    
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        
        list-style: none;
        
    }

    li {
        margin: 5px 30px;
        padding:15px 20px;

        border-radius: 10px;

        &:hover {
            background-color: ${props => props.theme.colorHover}
        }
    }


    a {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        text-decoration: none;
        color: ${props => props.theme.white}; 

        
    }

    @media (max-width: 1000px) {
        display: none;
    }


`