import Header from './Header'
import { Conteudo } from './Prototipo.styles'
import Footer from "./Footer"


import Bracelete from "../assets/bracelete.png"
import elemento from "../assets/elementoProt.png"

export default function Prototipo() {
  return (
    <div>
        <Header />

        <Conteudo>
          <h1 className="backgroundTitle">PROTÓTIPO</h1>
          
          <section>
            <div className="imgOne">
              <img src={Bracelete} alt="Imagem ilustrativa do produto"/>
            </div>
            <h2>Dispositivo de Monitoramento de Pessoas Epilépticas:</h2>

            <div className="text">
              <p>O projeto consiste em um dispositivo de monitoramento epiléptico projetado para monitorar sinais vitais de crianças e adolescentes.</p>
            </div>
            <div className="text">
              <p>O objetivo é identificar o possível começo de uma convulsão e reduzir a ansiedade e o estresse associados à imprevisibilidade das crises.</p>
 
            </div>
          </section>
          <section>          
            <h2>Sensores:</h2>
            <div className="text">
              <p>Considerando os sintomas de pessoas com epilepsia, foi criado utilizando o arduíno, um bracelete equipado com vários sensores que enviam alertas tanto para a pessoa quanto para seus responsáveis, através de um aplicativo.</p>              
            </div>

            <div className='Card'>
              <div>
                <h3>Esses sensores monitoram:</h3>
                <div>
                  <ul>
                    <li>Frequência cardíaca;</li>
                    <li>Temperatura corporal;</li>
                    <li>Contrações musculares;</li>
                    <li>Condutividade da pele;</li>
                  </ul>
                </div>
              </div>
              
              <img src={elemento} alt="Elemento decorativo" />
              
            </div>
          </section>



        </Conteudo>
        
    </div>
  )
}
