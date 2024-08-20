import { Conteudo } from "./ComoUsar.styles";
import Header from "./Header";
import Footer from "./Footer"


import p1 from "../assets/1..png"
import p2 from "../assets/2..png"
import p3 from "../assets/3..png"
import p4 from "../assets/4..png"
import p5 from "../assets/5..png"

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
              <p><b>Descrição: </b>Adquira o dispositivo em uma loja física, online ou diretamente com o fabricante.</p>
              <p><b>Detalhes: </b>Certifique-se de escolher o modelo correto para as necessidades específicas da criança. Verifique se o dispositivo inclui todos os acessórios necessários, como cabos de carregamento e manuais de instruções.</p>
              <p><b>Dica: </b>Verifique as políticas de garantia e devolução, caso haja algum problema com o dispositivo.</p>
            </div>
          </section>
          <section className="cardCinza">
            <img src={p2} alt="Passo 2"/>
            <div>
              <h2 className="titleCinza">Faça login no aplicativo</h2>
              <p><b className="titleCinza">Descrição: </b>Baixe e instale o aplicativo correspondente ao dispositivo em seu smartphone ou tablet.</p>
              <p><b className="titleCinza">Detalhes: </b>Acesse a App Store (iOS) ou Google Play Store (Android) e procure pelo nome do aplicativo. Siga as instruções na tela para instalar o aplicativo.</p>
              <p><b className="titleCinza">Dica: </b>Utilize um e-mail ativo e crie uma senha segura para a conta.</p>
            </div>
          </section>
          <section>
            <img src={p3} alt="Passo 3" />
            <div>
              <h2>Preencha as informações necessárias sobre a rotina da criança no App</h2>
              <p><b>Descrição: </b>Configure o perfil da criança no aplicativo inserindo dados essenciais.</p>
              <p><b>Detalhes: </b>Informações Pessoais: Insira o nome, idade, peso, altura e qualquer outra informação solicitada.</p>
              <p><b>Dica: </b> Seja o mais detalhado possível para que o aplicativo possa fornecer recomendações e alertas precisos.</p>
            </div>
          </section>
          <section className="cardCinza">
            <img src={p4} alt="Passo 4"/>
            <div>
              <h2 className="titleCinza">Coloque o bracelete</h2>
              <p><b className="titleCinza">Descrição: </b>Coloque o bracelete no pulso da criança.</p>
              <p><b className="titleCinza">Detalhes: </b>Certifique-se de que o bracelete esteja bem ajustado, mas confortável, para que os sensores possam funcionar corretamente.</p>
              <p><b className="titleCinza">Dica: </b>Verifique se o bracelete não está muito apertado, para evitar desconforto ou irritação na pele.</p>
            </div>
          </section>
          <section>
            <img src={p5} alt="Passo 5" />
            <div>
              <h2>Verifique a entrada dos sinais no aplicativo</h2>
              <p><b>Descrição: </b>Monitore os dados que o bracelete envia para o aplicativo.</p>
              <p><b>Detalhes: </b>Certifique-se de que o bracelete está sincronizado com o aplicativo via Bluetooth ou outro método de conexão.</p>
              <p><b>Monitoramento: </b>Acesse a seção de monitoramento no aplicativo para visualizar sinais vitais, atividade física, e outros dados coletados pelo bracelete.  </p>
              <p><b>Dica: </b>Verifique regularmente o aplicativo para garantir que os dados estão sendo atualizados corretamente e para acompanhar o bem-estar da criança.</p>
            </div>
          </section>
        </Conteudo>
        < Footer />
    </div>
  )
}
