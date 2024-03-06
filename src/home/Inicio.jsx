import imgmulher from "../imgs/mulher_cartao.png";
import styles from "../home/Inicio.module.css";
import explosaoverde1 from "../imgs/ExplosaoEsquerda.png";
import explosaoverde2 from "../imgs/ExplosaoDireita.png";
import cartao3 from "../imgs/TresCartoes.png";
import Triangulo from "../imgs/TrianguloEsquerdo.png";
import Retorno from "../imgs/RetornoDinheiro.png";
import LogoMarrom from "../imgs/logo.png";
import PredioWinbank from "../imgs/PredioWinbank.png";
import SemAnuidade from "../imgs/IconeSemAnuidade.png";
import Personalização from "../imgs/IconePersonalização.png";
import Inovador from "../imgs/IconeInovador.png";
import Positivo from "../imgs/ImgPositiva.png";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';



function Inicio() {/*usado para conseguir usar a tag ancora pra rolar ate a seção*/

   const location = useLocation();
  
    useEffect(() => {
      const scrollToSection = () => {
        const hash = location.hash;
        if (hash) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
  
      // Rola para a seção na montagem inicial
      scrollToSection();
  
      // Adiciona o ouvinte para mudanças no hash
      window.addEventListener('hashchange', scrollToSection, false);
  
      // Limpa o ouvinte quando o componente é desmontado
      return () => {
        window.removeEventListener('hashchange', scrollToSection, false);
      };
    }, [location]); // Dependência no objeto location para reagir a mudanças no hash
  
    // Resto do seu componente...

  
  return (
    <>

      <section className={styles.container}>
        <div className={styles.TextoBotaoPrincipal}>
          <div className={styles.TextoBotao}>
            <h1 className={styles.TituloPrincinpal}>
              Escolha a <span>WinBank</span> Aqui quem ganha é você
            </h1>
            <Link to="/CriarConta"> <button className={styles.botaocriarconta}>Crie sua conta</button></Link>
          </div>
        </div>

        <div className={styles.ImagemMulher}>
          <img  src={imgmulher} alt="mulher com o cartão na mão" />
        </div>
      </section>

      {/*segunda rolagem*/}

      <div id="secao2" className={styles.ExplosaoCartaoPrincipal}>
        <div className={styles.ExplosaoPrincipal1}>
          <img src={explosaoverde1} alt="fumaça de verde do lado esquerda" />
        </div>

        <main className={styles.TresCartaoPrincipal}>
          <div className={styles.textocartao}>
            <h1>
              Escolha um de nossos cartões <span>exclusivos</span>
            </h1>
          </div>

          <div className={styles.trescartao}>
            <img
              className={styles.cartao3}
              src={cartao3}
              alt="três cartões exclusivos"
            />
          </div>

          <div className={styles.TresCaixinhas}>
            <div className={styles.caixas}> <Link className={styles.LinkBotao}  to="/novidades">Conta Corrente</Link></div>
           <div className={styles.caixas}>  <Link className={styles.LinkBotao}  to="/novidades">Conta Poupança</Link></div>
          <div className={styles.caixas}>  <Link className={styles.LinkBotao}  to="/novidades"> Conta Kids </Link></div>
          </div>
        </main>

        <aside className={styles.ExplosaoPrincipal2}>
          <img src={explosaoverde2} alt="fumaça de verde do lado direita" />
        </aside>
      </div>

      {/*segunda rolagem fim*/}

      {/*teceira rolagem*/}

      <section className={styles.SecaoVantagens}>
        <div className={styles.LadoDireitoPrincipal}>
          <div className={styles.ImgTriangulo}>
            <p className={styles.TituloTarifa}>
              Sem Tarifas Economize seu dinheiro
            </p>

            <img src={Triangulo} alt="Triangulo preto e subtitulo" />
          </div>
        </div>

        <div className={styles.MeioPrincipal}>
          <div className={styles.CaixasVantagensPrincipal}>
            <div className={styles.caixa1}>
              <h1 className={styles.TituloCaixinha}>Indique Amigos</h1>
              <p className={styles.TextoCaxinha} id={styles.TextoCaxinhaID}>
                Indique seus amigos para o next e aproveitem juntos todas as
                vantagens de um banco 100% digital e gratuito
              </p>
            </div>
            <div className={styles.caixa2}>
              <h1 className={styles.TituloCaixinha}>Invista no WinBank</h1>
              <p className={styles.TextoCaxinha}>
              aqui nosso foco é dar uma atenção maior para que investe afim de lucrar
              </p>
            </div>
            <div className={styles.caixa3}>
              <h1 className={styles.TituloCaixinha}>Conta  gratuitos</h1>
              <p className={styles.TextoCaxinha}>
              Ter uma conta no WinBank não custa nada. A conta é digital e sem tarifa de manutenção.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ImgRetornoPrincipal}>
          <img src={Retorno} alt="Imagem de retorno de lucro" />
        </div>
      </section>

      {/*teceira rolagem fim*/}

      {/*quarta rolagem*/}

      <section id="secao4" className={styles.SobreWinBack}>
        <div className={styles.LogoMarrom}>
          <img className={styles.LogoMarromImg} src={LogoMarrom} alt="logo winbank" />
        </div>
        <div className={styles.TituloSobreWinbankPrincipal}>
          <h1 className={styles.TituloSobreWinbank}>
            Descubra a liberdade financeira no WinBank e transforme sua jornada
            financeira em uma experiência única.
          </h1>
        </div>

        <div className={styles.SobreEmpresaPrincipal}>
          <div className={styles.PredioWinbackPrincipal}>
            <img
              className={styles.ImgPredio}
              src={PredioWinbank}
              alt="predio da winbank"
            />
          </div>

          <div className={styles.TextoSobrenosPrincipal}>
            <p className={styles.TextoSobre}>
              Sobre Nós: WinBank - O Banco Sem Anuidade e Personalização
              Ilimitada Bem-vindo ao WinBank, onde a liberdade financeira se
              encontra com a criatividade! Somos uma instituição financeira
              inovadora que acredita que todos merecem uma experiência bancária
              simples, transparente e personalizada. Fundado com a visão de
              redefinir o setor bancário tradicional, o WinBank está aqui para
              tornar a gestão do seu dinheiro mais conveniente, econômica e
              divertida.
            </p>
          </div>
        </div>

        <div className={styles.VantagensWinbank}>
          <div className={styles.PorqueEscolherPrincipal}>
            <h1 className={styles.PorqueEscolher}>
              Por que Escolher o WinBank?
            </h1>
          </div>

          <div className={styles.SubTituloPorquePrincipal}>
            <h2 className={styles.SubTituloPorque}>
              No WinBank, acreditamos que você merece mais do que uma simples
              conta bancária. Aqui estão algumas razões pelas quais somos a
              escolha ideal para você
            </h2>
          </div>

          <div className={styles.CaixasBeneficiosPrincipal}>
            <div className={styles.CaixaVantagem1}>
              <div className={styles.ImgPrincipalVantegens}>
                <img className={styles.SemAnuidade} src={SemAnuidade} alt="" />
              </div>

              <div className={styles.TituloVantagens}>
                <ol>1. Sem Anuidade: Dizemos</ol>
              </div>

              <div className={styles.MiniTextoPrincipal}>
                <p className={styles.MiniTexto}>
                  No WinBank, todas as contas são 100% sem anuidade,
                  proporcionando liberdade financeira sem custos ocultos.
                </p>
              </div>
            </div>

            <div className={styles.CaixaVantagem2}>
              <div className={styles.ImgPrincipalVantegens}>
                <img
                  className={styles.SemAnuidade}
                  src={Personalização}
                  alt=""
                />
              </div>

              <div className={styles.TituloVantagens}>
                <ol>2. Personalização Ilimitada: </ol>
              </div>

              <div className={styles.MiniTextoPrincipal}>
                <p className={styles.MiniTexto}>
                Personalize seu cartão de débito ou crédito com designs 
                exclusivos ou crie o seu próprio, refletindo sua identidade.
                </p>
              </div>
            </div>

            <div className={styles.CaixaVantagem1}>
              <div className={styles.ImgPrincipalVantegens}>
                <img className={styles.SemAnuidade} src={Inovador} alt="" />
              </div>

              <div className={styles.TituloVantagens}>
                <ol>3. Experiência Digital Inovadora:</ol>
              </div>

              <div className={styles.MiniTextoPrincipal}>
                <p className={styles.MiniTexto}>
                Acesse suas contas, faça transferências e pague contas de forma 
                conveniente através de nossa plataforma digital intuitiva .
                </p>
              </div>
            </div>
          </div>

          <div className={styles.PontosPositivosPrincipal}>

            <div className={styles.ImagemPositivaPrincipal}>
              <img className={styles.ImagemPositiva} src={Positivo} alt="Imagem de aumento Positivo" />
            </div>

            <div className={styles.TextoPositivoPrincipal}>

              <p className={styles.TextoPositivo}>
                O WinBank está envolvido em várias iniciativas sociais e
                ambientais para criar um impacto positivo em nossa sociedade e
                no mundo em que vivemos. No WinBank, nossa missão é capacitar
                você a tomar decisões financeiras informadas e dar vida às suas
                aspirações financeiras. Estamos aqui para simplificar suas
                finanças e dar asas à sua criatividade, oferecendo a você um
                banco sem anuidade e com a possibilidade de personalização
                ilimitada. Junte-se a nós no WinBank e descubra um mundo de
                oportunidades financeiras sem limites. Seja você mesmo, seja
                WinBank! WinBank - Onde a Personalização Encontra a Liberdade
                Financeira.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/*quarta rolagem fim */}
    </>
  );
}
export default Inicio;
