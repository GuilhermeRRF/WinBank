import styles from "../pages/Etapa2.module.css";
import Numero2 from "../imgs/Numero2.png";
import Eclipse from "../imgs/EclipseVerde.png";
import { Link } from "react-router-dom";
function Etapa2() {
  return (
    <>
      <main className={styles.SecaoPrincipal}>
        <section className={styles.ContainerFormularioPrincipal}>
          <form className={styles.ContainerFormulario}>
            <input
              className={styles.campo}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              className={styles.campo}
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              required
            />
            <input
              className={styles.campo}
              type="password"
              id="confirma_senha"
              name="confirma_senha"
              placeholder="Confirmação de Senha"
              required
            />

            <label className={styles.CheckboxPrincipal}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="termoPrivacidade"
              />
              Eu li, estou ciente das consições de tratamento dos meus dados
              pessoais e dou meu consentimento, quando aplicavel, conforme
              descrita nesta Politica de Privacidade.
            </label>

            <label className={styles.CheckboxPrincipal}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="termoPrivacidade"
              />
              Aceito receber mensagens com informações do WinBank no Whatsapp.
            </label>      
            <Link to="/etapa3" href="#">
      
            <div className={styles.BotaoFormularioPrincipal}>
            <button className={styles.BotaoFormulario} type="submit">Enviar</button>
            </div>
            </Link>

          </form>
        </section>

        <aside className={styles.ContainerEtapaPrincipal}>
          <div>
          
            <div className={styles.ContainerEtapa}>
            <p className={styles.MiniTextoEtapa}>
                Criando conta para logar na plataforma, você pode logar
                colocando o CPF ao inves do Email
              </p>
              <img className={styles.ImgEtapa} src={Numero2} alt="primeira etapa" />
            </div>

            <div className={styles.ContainerEclipse}>
              <p className={styles.TextoEtapa}>
                Criando conta para logar na plataforma, você pode logar
                colocando o CPF ao inves do Email
              </p>

              <img
                className={styles.EclipseVerde}
                src={Eclipse}
                alt="eclipse verde com bontão enviar"
              />

              <Link to="/etapa3" href="#">
                <button className={styles.botao} type="submit">
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default Etapa2;
