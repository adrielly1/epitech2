import styled from "styled-components";

export  const CardContainer = styled.header`
    background: ${props => props.theme.titlePurple};
    width: 100%;
    height: 90px; 
    z-index: 1000;
    display: flex;
    padding: 60px 20px;
    align-items: center;
    justify-content: space-between;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        
        list-style: none;

        
        @media screen and (max-width: 1020px){
            flex-direction: column;
        } 
    }

    li {
        margin: 5px 30px;

    }


    a {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
        text-decoration: none;
        color: ${props => props.theme.white}; 

        
    }

    

    @media screen and (max-width: 1020px){
        flex-direction: column;
        height: 350px;
        padding: 10px 40px;
    }  
`

export const IconHeader = styled.nav`
    

    
    

    @media (max-width: 1000px) {
        img {
            display: flex;
            align-items: center;
            width: 300px;
            
        }
    }
`