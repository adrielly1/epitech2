import Header from "./Header"
import camila from "../assets/camila.png"
import adrielly from "../assets/adrielly.png"
import leticia from "../assets/leticia.png"
import { Conteudo } from "./Integrantes.styles"
import Call from "../assets/call.svg"
import insta from "../assets/instagram.svg"
import email from "../assets/email.svg"
import linke from "../assets/linkedin.svg"
import Footer from "./Footer"


export default function Integrantes() {
  return (
    <div>
        <Header />
        
        <Conteudo>
          <div className="title"><h1 className="backgroundTitle">INTEGRANTES</h1></div>
          <section>
              <img src={camila} alt="" />
              <div>
                <h2>Camila da Silva</h2>
                <p><img src={email} alt="" className="icons" />cs375911@gmail.com</p>
                <p><img src={Call} alt="" className="icons" /> (11) 95777-8159</p>
                <p><img src={insta} alt="" className="icons" />@camih.ss</p>
                <p><img src={linke} alt="" className="icons" /><a href="https://www.linkedin.com/in/camila-santos-b9a4b72ba/">Camila da Silva</a></p>
              </div>
          </section>
          <section>
              <img src={adrielly} alt="" />
              <div>
                <h2>Adrielly Camargo</h2>
                <p><img src={email} alt="" className="icons" /> adriiellycamargo@gmail.com</p>
                <p><b><img src={Call} alt="" className="icons" /></b> (11) 96218-8722</p>
                <p><img src={insta} alt="" className="icons" />@_elly_camargo</p>
                <p><img src={linke} alt="" className="icons" /> <a href="www.linkedin.com/in/adrielly-camargo">Adrielly Camargo</a></p>

              </div>
              
          </section>
          <section>
              <img src={leticia} alt=""  className="ultimo" />
              <div className="ultimo">
                <h2>Leticia Lima</h2>
                <p><img src={email} alt="" className="icons" />leticiaakiralele2018@gmail.com</p>
                <p><b><img src={Call} alt="" className="icons" /></b>(11) 97281-6578</p>
                <p><img src={insta} alt="" className="icons" />@leticia_lm07</p>
                <p><img src={linke} alt="" className="icons" /><a href="https://www.linkedin.com/in/letícia-lima-silva-5a8b732bb/">Letícia Lima Silva</a></p>

              </div>
          </section>
        </Conteudo>
        < Footer /> 
    </div>
  )
}
