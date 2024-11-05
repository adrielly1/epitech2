import Header from "./Header";
import imgHome from "../assets/imgHomee.jpg"
import { Conteudo } from "./Home.styles";
import Footer from "./Footer"

export default function Home() {
  return (
    <div>
        <Header />
        <Conteudo>
          
          <div className="flex">
              <h1>VIVA MELHOR COM EPILEPSIA</h1>
              <h2 className="banner">Junte-se a nós e descubra como nossa rede pode fazer a diferença em sua vida.</h2>
            
          </div>

          <div className="aligm">
            <div className="cardPurple">
              <h3 className="textgrey  ">Você sabia que...</h3>
              <p>Durante uma crise epiléptica, é possível a pessoa manter a consciência. A manifestação da crise varia de caso para caso.</p>
            </div>
            <div className="cardGrey">
              <h3 >Dia da Epilepsia</h3>
              <p>Dia 26 de março, anualmente, as pessoas ao redor do mundo são convidadas a usar a cor roxa em dedicação a epilepsia.</p>
            </div>
            <div className="cardPurple">
              <h3 className="textgrey">Você sabia que...</h3>
              <p className="cardPurple diferente">A epilepsia pode acometer desde o período neonatal até o idoso, além de poder ter início em qualquer período da vida.</p>
            </div>
            
            
            
          </div>
          
        </Conteudo>

    </div>
  )
}
