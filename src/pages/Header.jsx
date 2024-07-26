import { CardContainer, IconHeader, NavHeader } from "./Header.styles";
import logoEpitech from "../assets/logoEpitech.png";


export default function Header() {
  return (
    <div>
      <CardContainer>
        <IconHeader> 
          <img src={logoEpitech} alt="Logo do site" />
        </IconHeader>
        <NavHeader >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/epilepsia">Epilepsia</a></li>
          <li><a href="/prototipo">Protótipo</a></li>
          <li><a href="/comousar">Como usar?</a></li>
          <li><a href="/pecas">Peças</a></li>
          <li><a href="/integrantes">Integrantes</a></li>
        </ul>
        </NavHeader>
      </CardContainer>
    </div>
  )
}
