import { Conteudo } from "./Epilepsia.styles";
import Header from "./Header";
import choque  from "../assets/Choque.png";
import Maleta from "../assets/maleta.png"
import seringa from "../assets/seringa.png"
import Reme from "../assets/remedios.png"
import Cerebro510 from "../assets/cerebro5-10.png"
import Cerebro1010 from "../assets/cerebro10-10.png"
import Epi from "../assets/Epilepsia.png"
import Footer from "./Footer"


export default function Epilepsia() {
  return (
    <div>
      <Header />
      <Conteudo>
        <h1 className="backgroundTitle">O QUE É EPILEPSIA?</h1>
        
        <section>
          <div className="text">
            <p >Epilepsia é um transtorno neurológico caracterizada pelas crises epilépticas recorrentes, essas crises são causadas por descargas elétricas anormais e excessivas de neurônios no córtex cerebral.</p>
          </div>
          
          <h2>Crises epiléticas:</h2>
          <div className="text">
            <p>As crises epiléticas podem ser classificadas em dois grandes grupos:</p>
          </div>
          <ul className="card">
            <li className="cardPurple ">
              <div className="tituloCards"><img src={Cerebro510} alt="" /><h3>Crises Focais:</h3></div>Localizadas em uma área específica do cérebro. Podem ser simples, quando a pessoa mantém a consciência, ou complexas, quando há perda ou alteração da consciência.</li>
            <li className="cardGrey ">
              <div className="tituloCards"><img src={Cerebro1010} alt="" /><h3>Crises Generalizadas:</h3></div> Afetam ambos os hemisférios cerebrais desde o início. Exemplos incluem crises de ausência (onde a pessoa perde a consciência por alguns segundos) e crises tônico-crônicas (caracterizadas por perda de consciência e convulsões generalizadas).</li>
          </ul>
        </section>

        <section>

          <h2>Tratamento:</h2>        
          <div className="elements">
            <img src={Reme} alt="Ilustração comprimido" />
            <img src={Maleta} alt="Ilustração Kid médico" />
            <img src={seringa} alt="Ilustração medicamento" />
          </div>
          <div className="text">
            <p>A OMS (Organização Mundial da Saúde) inclui a epilepsia como transtorno mental. Pessoas com epilepsia sofrem estigma e quando deixadas sem tratamento, podem sofrer graves disfunções. Embora considerada como transtorno mental, ainda é difícil classificar as causas dos transtornos mentais associadas à epilepsia.</p>
          </div>
          <div className="text">
            <p>Para o tratamento, usa-se fármacos, conhecidos também como antiepilépticos. Epilepsia não tem cura e a finalidade do tratamento é apenas sintomática, a prioridade é manter a pessoa sem crises e isso é conseguido com o uso regular da medicação. Porém, mesmo com os vários medicamentos que existem hoje em dia, mais de 30% dos doentes não obtém um controle completo das crises.</p>
          </div>
          
        </section>
        
        <section>
          <h2>Sintomas:</h2>
          <div className="text">
            <p>Pessoas que possuem epilepsia normalmente tem como sintomas:</p>
          </div>
          
          <div className="sintomas">
            <div>
              <ul>
                <li><b>Nos músculos: </b>contrações musculares rítmicas ou espasmos musculares.</li>
                <li><b>Sensorial: </b>formigamento ou sintomas visuais ou sensitivos</li>
                <li><b>No corpo: </b>desmaio ou fadiga</li>
                <li><b>Na cognição: </b> amnésia ou confusão mental</li>
                <li><b>Sintomas psicológicos: </b> depressão ou medo</li>
                <li><b>Também é comum: </b> convulsões, ansiedade, dor de cabeça, paralisia temporária após uma convulsão ou sonolência</li>
              </ul>
            </div>
          
            <img src={choque} alt="Choque"/>
          </div>
        </section>

    
        
        
        
      </Conteudo>
      <Footer />
    </div>
  )
}
