import Header from './Header'
import { Conteudo } from './Prototipo.styles'

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
              <p>Nosso projeto consiste no desenvolvimento de um dispositivo de biofeedback, projetado para monitorar sinais vitais e dizer se as crianças e adolescentes estão tendo crises epilépticas, proporcionando um aviso antecipado para que medidas preventivas possam ser tomadas.</p>
            </div>
            <div className="text">
              <p>O objetivo do projeto é analisar os sinais vitais e identificar o possível começo de uma convulsão, queremos reduzir a ansiedade e o estresse associados à imprevisibilidade das crises.</p>
 
            </div>
            <div className="text">
              <p>O diferencial do projeto é o foco em desenvolver a capacidade do dispositivo de prever e avisar quando a criança ou adolescente passa por uma crise epiléptica.</p>
            </div>
            <div className="text">
              <p>Utilizando o Arduino, criamos um bracelete que envia alertas tanto para a pessoa quanto para seus responsáveis, através de um aplicativo.</p>
            </div>

            
          </section>
          <section>          
            <h2>Sensores:</h2>
            <div className="text">
              <p>Levando em consideração os sintomas de pessoas epilépticas, o dispositivo consiste em um bracelete equipado com vários sensores conectados a uma plataforma Arduino.</p>              
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
