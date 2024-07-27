import styled from "styled-components";

export  const CardContainer = styled.header`
    background: ${props => props.theme.cardPurple};
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px; 
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    
`
export const IconHeader = styled.div`

    
`
export const NavHeader = styled.nav`
    
    position: relative;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    

    ul {
        padding-top: 0%;
        display: flex;
        justify-content: center;
        
        margin: 0;
        list-style: none;
        
    }

    li {
        margin: 5px 30px;
        padding: 10px 0;

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

`