import Header from "./Header";
import imgHome from "../assets/imgHomee.jpg"
import { Conteudo } from "./Home.styles";

export default function Home() {
  return (
    <div>
        <Header />
        <Conteudo>
          <img src={imgHome} alt="Dia da Epilepsia" />
          <h1>VIVA MELHOR COM EPILEPSIA</h1>
          <h2>Junte-se a nós hoje e descubra como nossa rede pode fazer a diferença em sua vida.</h2>
          <h2>Você sabia que...</h2>
          <p>É possível manter a consciência durante uma crise de epilepsia.Elas podem ser com ou sem alteração da consciência</p>
          <h2>Dia da Epilepsia</h2>
          <p>Dia 26 de março, anumalmente, as pessoas ao redor do mundo são convidadas a usar a cor roxa em dedicação a epilepsia.</p>
          <h2>Você sabia que...</h2>
          <p>O estresse é um fator que pode desencadear uma crise epilética.</p>
        </Conteudo>
    </div>
  )
}
