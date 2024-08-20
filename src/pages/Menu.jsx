import { useState } from "react"
import IconMenuC from "../assets/menu.png"
import IconMenuO from "../assets/menuOpen.svg"
import { Container } from "./Menu.styles";
import { Link } from "react-router-dom";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <div className="mobile-menu">
                <button onClick={handleMenu} className={isOpen ? "menu-icon open" : "menu-icon"}>
                    <img src={isOpen ? IconMenuO : IconMenuC } alt=""/>

                </button>

                {isOpen &&
                    <nav className={isOpen ? "nav open" : "nav"}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/epilepsia">Epilepsia</Link></li>
                            <li><Link to="/prototipo">Protótipo</Link></li>
                            <li><Link to="/comousar">Funcionamento</Link></li>
                            <li><Link to="/pecas">Peças</Link></li>
                            <li><Link to="/integrantes">Integrantes</Link></li>
                        </ul>
                    </nav>
                }                
            </div>
        </Container>
        
    )
}
