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

export default function Pecas() {
  return (
    <div>
        <Header />
        <Conteudo>
          <h1 className="backgroundTitle" >PEÇAS</h1>
          <section>
            <img src={Emg} alt="" />
            <div>
              <h2>Módulo Sensor Eletromiográfico de Sinal Muscular - EMG</h2>
              <p>O Módulo Sensor Eletromiográfico é um dispositivo utilizado para medir a atividade elétrica dos músculos. Ele é comumente usado em projetos de robótica e dispositivos de interface humano-computador, permitindo que movimentos musculares sejam convertidos em sinais elétricos que podem ser lidos por microcontroladores como Arduino ou Raspberry Pi.</p>
            </div>
          </section>
          <section>
            <img src={P24} alt="" />
            <div>
              
              <h2>Sensor De Condutividade Gbk Robotics P24</h2>
              <p>O Sensor de Condutividade GBK Robotics P24 é um dispositivo projetado para trabalhar com microcontroladores como Arduino, Raspberry Pi, ARM, AVR, Atmel, entre outros. Ele é capaz de medir a condutividade em diversas superfícies e é frequentemente utilizado em projetos educacionais, como pequenos pianos feitos com Arduino, onde materiais condutivos podem ser usados como teclas.</p>
            </div>
            
          </section>
          <section>
            <img src={MM} alt="" />
            <div>
            <h2>Jumpers - Macho/Macho</h2>
            <p>Os jumpers macho-macho são cabos de conexão que possuem conectores macho em ambas as extremidades. Eles são usados para interligar componentes eletrônicos em protoboards, placas de circuito impresso (PCBs) ou outros dispositivos onde os pinos ou terminais dos componentes também são do tipo macho. Esses jumpers são muito úteis para prototipagem e testes em eletrônica, pois permitem uma conexão rápida e sem a necessidade de soldagem.</p>
            </div>
          </section>
          <section>
            <img src={FF} alt="" />
            <div>
              
              <h2>Jumpers - Fêmea/Fêmea</h2>
              <p>Os jumpers fêmea-fêmea são cabos de conexão que possuem conectores fêmea em ambas as extremidades. Eles são usados para interligar componentes eletrônicos em protoboards ou placas de circuito impresso (PCIs), onde os pinos ou terminais dos componentes também são do tipo fêmea. Esses jumpers são muito úteis para prototipagem e testes em eletrônica, pois permitem uma conexão rápida e sem a necessidade de soldagem.</p>
            </div>
            
          </section>
          <section>
            <img src={MF} alt="" />
            <div>
              <h2>Jumpers - Macho/Fêmea</h2>
              <p>Os jumpers macho-fêmea são cabos de conexão essenciais para projetos de eletrônica, especialmente úteis em prototipagem e testes. Eles permitem a conexão entre os pinos macho de uma placa, como um Arduino, e os soquetes fêmea de uma protoboard ou vice-versa, sem a necessidade de soldagem.</p>
            </div>
          </section>
          <section>
            <img src={Temperatura} alt="" />
            <div>
              
              <h2>Sensor Temperatura LM35DZ</h2>
              <p>O Sensor de Temperatura LM35 é um dispositivo eletrônico utilizado para medir a temperatura ambiente com alta precisão. Com uma faixa de operação que vai de -55°C a +150°C, o LM35DZ oferece uma ampla gama de aplicações em diversos ambientes. Sua sensibilidade de 10 mV por grau Celsius proporciona uma leitura linear e confiável da temperatura.</p>
            </div>
            
          </section>
          <section>
            <img src={Atmega} alt="" />
            <div>
              <h2>Arduino Pro Micro ATmega32U4 5V</h2>
              <p>O Arduino Pro Micro ATmega32U4 5V é uma pequena plataforma de prototipagem baseada no microcontrolador ATmega32U4. Ele é projetado para uso em pequenos projetos eletrônicos e tem a vantagem de ser facilmente instalável em protoboards, ocupando um espaço mínimo.</p>
            </div>
          </section>
          <section>
            <img src={Bluetooth} alt="" />
            <div>
              
              <h2>Bluetooth HC-05 </h2>
              <p>O Módulo Bluetooth HC-05 é um módulo de comunicação sem fios, ideal para enviar ou receber informações com seu projeto Arduino remotamente. O Módulo Bluetooth HC-05 suporta os modos Mestre (Master) e Escravo (Slave), possui regulador de tensão e aceita tensões de 3.3 a 5V, e um LED indicador de funcionamento.</p>
            </div>
            
          </section>
          <section>
            <img src={R330} alt="" />
            <div>
              <h2>Resistor 330</h2>
              <p>O Resistor 330 ohms 1/4W é um componente eletrônico capaz de limitar a corrente elétrica em um determinado fluxo de energia.  Pelo fato de possuir uma resistência maior do que a dos cabos e das trilhas de um circuito elétrico, o resistor força a redução da corrente elétrica que passa por ele, provocando assim, uma queda de tensão.</p>
            </div>
          </section>
          <section>
            <img src={R220} alt="" />
            <div>
              <h2>Resistor 220</h2>
              <p>O Resistor 220 ohms 1/4W é um componente eletrônico capaz de limitar a corrente elétrica em um determinado fluxo de energia. Pelo fato de possuir uma resistência maior do que a dos cabos e das trilhas de um circuito elétrico, o resistor força a redução da corrente elétrica que passa por ele, provocando assim, uma queda de tensão.</p>
            </div>
            
          </section>
        </Conteudo>
        < Footer />
    </div>
  )
}
