import Header from "./Header"
import camila from "../assets/camila.png"
import adrielly from "../assets/adrielly.png"
import leticia from "../assets/leticia.png"
import { Conteudo } from "./Integrantes.styles"

export default function Integrantes() {
  return (
    <div>
        <Header />
        <Conteudo>
          <h1 className="backgroundTitle">INTEGRANTES</h1>
          <section>
              <img src={camila} alt="" />
              <div>
                <h2>Camila da Silva</h2>
                <p><b>Email: </b>  cs375911@gmail.com</p>
                <p><b>Telefone: </b> (11) 95777-8159</p>
                <p><b>Instagram: </b>@camih.ss</p>
                <p><b>Linkedin: </b><a href="https://www.linkedin.com/in/camila-santos-b9a4b72ba/">Camila da Silva</a></p>
              </div>
          </section>
          <section>
              <img src={adrielly} alt="" />
              <div>
                <h2>Adrielly Camargo</h2>
                <p><b>Email:</b> adriiellycamargo@gmail.com</p>
                <p><b>Telefone</b> (11) 96218-8722</p>
                <p><b>Instagram: </b>@_elly_camargo</p>
                <p><b>Linkedin: </b> <a href="www.linkedin.com/in/adrielly-camargo">Adrielly Camargo</a></p>

              </div>
              
          </section>
          <section>
              <img src={leticia} alt="" />
              <div>
                <h2>Leticia Lima</h2>
                <p><b>Email: </b>leticiaakiralele2018@gmail.com</p>
                <p><b>Telefone: </b>(11) 97281-6578</p>
                <p><b>Instagram: </b>@leticia_lm07</p>
                <p><b>Linkedin: </b><a href="https://www.linkedin.com/in/letícia-lima-silva-5a8b732bb/">Letícia Lima Silva</a></p>

              </div>
          </section>
        </Conteudo>
    </div>
  )
}
