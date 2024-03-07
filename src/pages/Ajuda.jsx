import IconeLupa from "../imgs/IconeLupa.png";
import ImgAtendente from "../imgs/Atendente.png";
import Envelope from "../imgs/IconEmail.png"
import Telefone from "../imgs/IconTell.png"
import Chat from "../imgs/IconChat.png"
import styles from "../pages/Ajuda.module.css"

function Ajuda() {
  return (
    <>
      <section className={styles.ContainerPrincipal}>
        <div className={styles.LadoEsquerdo}>
          <div className={styles.TituloAjudaPrincipal}>
            <p className={styles.TituloAjuda}>Como podemos ajudar?</p>
          </div>
          <div className={styles.BarraPesquisaPrincipal}>
            <div className={styles.BarraPesquisa}>
              <button className={styles.BotaoPesquisar}>
                <img
                  className={styles.IconeLupa}
                  src={IconeLupa}
                  alt="icone de lupa"
                />
              </button>
              <input
                type="search"
                className={styles.SearchInput}
                placeholder="Pesquisar..."
              />
            </div>
          </div>
        </div>

        <div className={styles.LadoDireito}>
          <img className={styles.ImgAtendente} src={ImgAtendente} alt="foto do Atendente" />
        </div>
      </section>
      <section className={styles.ContainerCaixa}>

          <div className={styles.caixa}>
            
            <img className={styles.Icone} src={Envelope} alt="" />
            <p className={styles.Titulo}>E-mail</p>
            <p className={styles.Texto}>Tem alguma duvida ?</p>
            <p className={styles.MiniTexto}><a className={styles.link} href="#">centralajuda@winbank.com</a></p>

          </div>

          <div className={styles.caixa}>
        
          <img className={styles.Icone} src={Telefone} alt="" />
            <p className={styles.Titulo}>Telefone</p>
            <p className={styles.Texto}>Você pode ligar a qualquer hora.</p>
            <p className={styles.MiniTexto}><a className={styles.link}  href="#">0800 227 1105</a></p>

          </div>

          <div className={styles.caixa}>

          <img className={styles.Icone} src={Chat} alt="" />
            <p className={styles.Titulo}>Chat</p>
            <p className={styles.Texto}> <a href=""></a>Precisa de uma ajuda agora?</p>
            <p className={styles.MiniTexto}><a className={styles.link}  href="#">Basta abrir o chat no app.</a></p>

          </div>

      </section>
    </>
  );
}

export default Ajuda;
