import Header from "./Header"
import camila from "../assets/camila.png"
import adrielly from "../assets/adrielly.png"
import leticia from "../assets/leticia.png"

export default function Integrantes() {
  return (
    <div>
        <Header />
        <h1 className="backgroundTitle">Integrantes</h1>
        <section>
            <img src={camila} alt="" />
            <h2>Camila da Silva Santos</h2>
            <p><b>email: </b>  cs375911@gmail.com</p>
        </section>
        <section>
            <img src={adrielly} alt="" />
            <h2>Adrielly Camargo dos Santos Alicate</h2>
            <p><b>email: </b> adriiellycamargo@gmail.com</p>
        </section>
        <section>
            <img src={leticia} alt="" />
            <h2>Leticia Lima Silva</h2>
            <p><b>email: </b>  leticiaakiralele2018@gmail.com</p>
        </section>
    </div>
  )
}
