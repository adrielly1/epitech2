import logoEpitech from "../assets/logoEpitech.png";
import { Link } from "react-router-dom";
import { CardContainer, IconHeader } from "./Footer.styles";



export default function Header() {

  return (
    <div>
      <CardContainer>

        <IconHeader>
          <img src={logoEpitech} alt="Logo do site" />
        </IconHeader>
        <nav >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/epilepsia">Epilepsia</Link></li>
            <li><Link to="/prototipo">Protótipo</Link></li>
            <li><Link to="/comousar">Funcionamento</Link></li>
            <li><Link to="/pecas">Peças</Link></li>
            <li><Link to="/integrantes">Integrantes</Link></li>
          </ul>
        </nav>
      </CardContainer>
    </div>
  )
}
