import { Conteudo } from "./Epilepsia.styles";
import Header from "./Header";
import choque  from "../assets/Choque.png";
import Epi from "../assets/Epilepsia.png"

export default function Epilepsia() {
  return (
    <div>
      <Header />
      <Conteudo>
        <h1 className="backgroundTitle">O QUE É EPILEPSIA?</h1>
        
        <p>Epilepsia é um transtorno neurológico caracterizada pelas crises epilépticas recorrentes, essas crises são causadas por descargas elétricas anormais e excessivas de neurônios no córtex cerebral.</p>
        <h2>Crises epiléticas:</h2>
        <p>As crises epiléticas podem ser classificadas em dois grandes grupos:</p>
        <ul>
          <li className="cardPurple "><h3>Crises focais:</h3>Localizadas em uma área específica do cérebro. Podem ser simples, quando a pessoa mantém a consciência, ou complexas, quando há perda ou alteração da consciência.</li>
          <li className="cardGrey "><h3>Crises Generalizadas:</h3> Afetam ambos os hemisférios cerebrais desde o início. Exemplos incluem crises de ausência (onde a pessoa perde a consciência por alguns segundos) e crises tônico-crônicas (caracterizadas por perda de consciência e convulsões generalizadas).</li>
        </ul>
        
        <p>A OMS (Organização Mundial da Saúde) inclui a epilepsia como transtorno mental. Pessoas com epilepsia sofrem estigma e quando deixadas sem tratamento, podem sofrer graves disfunções. Embora considerada como transtorno mental, ainda é difícil classificar as causas dos transtornos mentais associadas à epilepsia.</p>
        <p>Para o tratamento, usa-se fármacos, conhecidos também como antiepilépticos. Epilepsia não tem cura e a finalidade do tratamento é apenas sintomática, a prioridade é manter a pessoa sem crises e isso é conseguido com o uso regular da medicação. Porém, mesmo com os vários medicamentos que existem hoje em dia, mais de 30% dos doentes não obtém um controle completo das crises.</p>
        
        <h2>Sintomas:</h2>
        <p>Pessoas que possuem epilepsia normalmente tem como sintomas:</p>
        <ul>
          <li><b>Nos musculos:</b>contrações musculares rítmicas ou espasmos musculares.</li>
          <li><b>Sensorial:</b>formigamento ou sintomas visuais ou sensitivos</li>
          <li><b>No corpo:</b>desmaio ou fadiga</li>
          <li><b>Na cognição:</b> amnésia ou confusão mental</li>
          <li><b>Sintomas psicológicos:</b> depressão ou medo</li>
        </ul>
        <p>Também é comum: convulsões, ansiedade, dor de cabeça, paralisia temporária após uma convulsão ou sonolência</p>
        
        <img src={choque} alt="Choque"/>
      </Conteudo>
    </div>
  )
}
