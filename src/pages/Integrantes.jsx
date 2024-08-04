import Header from "./Header";
import { Conteudo } from "./Integrantes.styles";

export default function Integrantes() {
  return (
    <div>
        <Header />
        <Conteudo>
          <h1 className="backgroundTitle">INTEGRANTES</h1>
          <section>
            <img src={Camila} alt="" />
            <h2>Camila da Silva Santos</h2>
            <p>Email: cs375911@gmail.com</p>
          </section>
          <section>
            <img src={Adrielly} alt="" />
            <h2>Adrielly Camargo dos Santos Alicate</h2>
            <p>Email: adriiellycamargo@gmail.com</p>
          </section>
          <section>
            <img src={Leticia} alt="" />
            <h2>Letícia Lima Silva</h2>
            <p>Email: leticiaakiralele2018@gmail.com</p>
          </section>
        </Conteudo>
    </div>
  )
}
