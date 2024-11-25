import { Conteudo } from "./ComoUsar.styles";
import Header from "./Header";
import Footer from "./Footer"


import p1 from "../assets/1..png"
import p2 from "../assets/2..png"
import p3 from "../assets/3..png"
import p4 from "../assets/4..png"
import p5 from "../assets/5..png"
import Vfuncionando from "../assets/funcionando.mp4"

export default function ComoUsar() {
  return (
    <div>
        <Header />
        <Conteudo>
          <h1 className="backgroundTitle">FUNCIONAMENTO DO PROTÓTIPO:</h1>

          <section>
            <img src={p1} alt="Passo 1" />
            <div>
              <h2>Compre o dispositivo</h2>
              <p><b>Descrição: </b>Adquira o dispositivo.</p>
              <p><b>Detalhes: </b>Verifique se o dispositivo inclui todos os acessórios necessários, como cabos de carregamento e manuais de instruções.</p>
              <p><b>Dica: </b>Verifique as políticas de devolução, caso haja algum problema com o dispositivo.</p>
            </div>
          </section>
          <section className="cardCinza">
            <img src={p2} alt="Passo 2"/>
            <div>
              <h2 className="titleCinza">Acesse o aplicativo (MIT APP INVENTOR)</h2>
              <p><b className="titleCinza">Descrição: </b>Baixe e instale o aplicativo em seu smartphone ou tablet.</p>
              <p><b className="titleCinza">Detalhes: </b>Acesse a App Store (iOS) ou Google Play Store (Android) e procure pelo nome do aplicativo.</p>
            </div>
          </section>
          <section>
            <img src={p3} alt="Passo 3" />
            <div>
              <h2>Preencha as informações necessárias sobre a criança no App</h2>
              <p><b>Descrição: </b>Configure o perfil da criança no aplicativo.</p>
              <p><b>Detalhes: </b>Informações: insira como solicitado de forma clara as informações sobre a epilepsia.</p>
            </div>
          </section>
          <section className="cardCinza">
            <img src={p4} alt="Passo 4"/>
            <div>
              <h2 className="titleCinza">Coloque o bracelete</h2>
              <p><b className="titleCinza">Descrição: </b>Coloque o bracelete no braço da criança.</p>
              <p><b className="titleCinza">Detalhes: </b>Certifique-se de que o bracelete esteja bem ajustado, mas confortável, para que os sensores possam funcionar corretamente.</p>
              <p><b className="titleCinza">Dica: </b>Verifique se o bracelete não está muito apertado, para evitar desconforto.</p>
            </div>
          </section>
          <section>
            <img src={p5} alt="Passo 5" />
            <div>
              <h2>Verifique a entrada dos sinais no aplicativo</h2>
              <p><b>Detalhes: </b>Certifique-se de que o bracelete está sincronizado com o aplicativo via Bluetooth.</p>
              <p><b>Monitoramento: </b>Acesse a seção de monitoramento no aplicativo para visualizar sinais vitais e outros dados coletados pelo bracelete.  </p>
              <p><b>Dica: </b>Verifique regularmente o aplicativo para garantir que os dados estão sendo atualizados corretamente e para acompanhar o bem-estar da criança.</p>
            </div>
          </section>
          <p className="Vide">Segue exemplo de como as informações devem aparecer no App:</p>
          <div className="vdd">
            
            <video  controls>
              <source src={Vfuncionando} type="video/mp4" />
              Seu navegador não suporta a exibição de vídeos.
            </video>

          </div>
        </Conteudo>
    </div>
  )
}
