import Header from './Header'
import { Conteudo } from './Pecas.styles'
import Footer from "./Footer"


import Emg from "../assets/emg.png"
import P24 from "../assets/p24.png"
import MM from "../assets/m-m.png"
import FF from "../assets/f-f.png"
import MF from "../assets/m-f.png"
import Temperatura from "../assets/temperatura.png"
import Atmega from "../assets/atmega.png"
import Bluetooth from "../assets/bluetooth.png"
import R330 from "../assets/r330.png"
import R220 from "../assets/r220.png"
import MAX30 from "../assets/max30.webp"
import NANO from "../assets/nano.webp"
import BZZ from "../assets/buzzer.webp"
import BTT from "../assets/btt.webp"
import LEDR from "../assets/led.webp"
import ELET from "../assets/elet.webp"
import BATERIA from "../assets/bateria.webp"

export default function Pecas() {
  return (
    <div>
        <Header />
        <Conteudo>
          <h1 className="backgroundTitle" >PEÇAS</h1>
          <section>
            <img src={MAX30} alt="" />
            <div>
              <h2>Sensor Max30102 De Batimento Cardíaco Oximetro Pulso I2c Gy:</h2>
              <p>Detectam batimentos cardíacos e medem indiretamente a quantidade de oxigênio no sangue.</p>
            </div>
          </section>
          <section>
            <img src={P24} alt="" />
            <div>
              
              <h2>Sensor De Condutividade Gbk Robotics P24:</h2>
              <p>É capaz de medir a condutividade em diversas superfícies. </p>
            </div>
            
          </section>
          <section>
            <img src={MM} alt="" />
            <div>
            <h2>Jumpers - Macho/Macho</h2>
            <p>São usados para interligar componentes eletrônicos em protoboards, placas de circuito impresso (PCBs) ou outros dispositivos onde os pinos ou terminais dos componentes também são do tipo macho.</p>
            </div>
          </section>
          <section>
            <img src={FF} alt="" />
            <div>
              
              <h2>Jumpers - Fêmea/Fêmea</h2>
              <p>São usados para interligar componentes eletrônicos em protoboards, placas de circuito impresso (PCBs) ou outros dispositivos onde os pinos ou terminais dos componentes também são do tipo fêmea.</p>
            </div>
            
          </section>
          <section>
            <img src={MF} alt="" />
            <div>
              <h2>Jumpers - Macho/Fêmea</h2>
              <p>Eles permitem a conexão entre os pinos macho de uma placa, como um Arduino, e os soquetes fêmea de uma protoboard ou vice-versa, sem a necessidade de soldagem.</p>
            </div>
          </section>
          <section>
            <img src={Temperatura} alt="" />
            <div>
              
              <h2>Sensor Temperatura LM35DZ</h2>
              <p>Utilizado para medir a temperatura ambiente com alta precisão. Com uma faixa de operação que vai de -55°C a +150°C, o LM35DZ oferece uma ampla gama de aplicações em diversos ambientes.
              </p>
            </div>
            
          </section>
          <section>
            <img src={NANO} alt="" />
            <div>
              <h2>Placa Nano V3 + Cabo USB para Arduino:</h2>
              <p>A Placa Nano V3.0 Arduino é uma placa pequena, baseada no ATmega328, completa e fácil de usar.</p>
            </div>
          </section>
          <section>
            <img src={Bluetooth} alt="" />
            <div>
              
              <h2>Bluetooth HC-05 </h2>
              <p>É um módulo de comunicação sem fios, ideal para enviar ou receber informações com seu projeto Arduino remotamente.</p>
            </div>
            
          </section>
          <section>
            <img src={R330} alt="" />
            <div>
              <h2>Resistor 330</h2>
              <p>É um componente eletrônico capaz de limitar a corrente elétrica em um determinado fluxo de energia.</p>
            </div>
          </section>
          <section>
            <img src={R220} alt="" />
            <div>
              <h2>Resistor 220</h2>
              <p>É um componente eletrônico capaz de limitar a corrente elétrica em um determinado fluxo de energia.</p>
            </div>
            
          </section>
          <section>
            <img src={BZZ} alt="" />
            <div>
              <h2>Buzzer ativo 9V:</h2>
              <p>É um componente indicado para adicionar efeitos sonoros em projetos eletrônicos como alarmes, sistemas de sinalização, jogos, brinquedos, etc.</p>
            </div>
            
          </section>
          <section>
            <img src={LEDR} alt="" />
            <div>
              <h2>Led Difuso 5mm Vermelho: </h2>
              <p>É um componente eletrônico utilizado em diversos projetos de iluminação e sinalização.</p>
            </div>
            
          </section>

          

          <section>
            <img src={BTT} alt="" />
            <div>
              <h2>Push button (chave táctil): </h2>
              <p>É usado como um botão para acionamento de um determinado circuito eletrônico.</p>
            </div>
            
          </section>

          <section>
            <img src={ELET} alt="" />
            <div>
              <h2>Eletrodos reutilizáveis:</h2>
              <p>Adesivos com metal usado para verificar a condutividade da pele.</p>
            </div>
            
          </section>

          <section>
            <img src={BATERIA} alt="" />
            <div>
              <h2>Bateria 9V:</h2>
              <p>Destinada a veículos pesados, que necessitam de alimentação para sistemas elétricos com componentes que, priorizam a performance e potência.</p>
            </div>
            
          </section>
        </Conteudo>
    </div>
  )
}
