import { CardContainer, IconHeader, NavHeader } from "./Header.styles";
import logoEpitech from "../assets/logoEpitech.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";



export default function Header() {

  return (
    <div>
      <CardContainer>
          <div>
            <Menu />
          </div>
        <IconHeader> 
          
          <img src={logoEpitech} alt="Logo do site" />
        </IconHeader>
        <NavHeader >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/epilepsia">Epilepsia</Link></li>
            <li><Link to="/prototipo">Protótipo</Link></li>
            <li><Link to="/comousar">Funcionamento</Link></li>
            <li><Link to="/pecas">Peças</Link></li>
            <li><Link to="/integrantes">Integrantes</Link></li>
          </ul>
        </NavHeader>
      </CardContainer>
    </div>
  )
}
