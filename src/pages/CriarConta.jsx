import styles from "../pages/CriarConta.module.css";
import Numero1 from "../imgs/Numero1.png";
import Eclipse from "../imgs/EclipseVerde.png";
import { Link } from "react-router-dom";

function CriarConta() {
  return (
    <>
      <main className={styles.SecaoPrincipal}>
        <section className={styles.ContainerFormularioPrincipal}>
          <form className={styles.ContainerFormulario}>
            <input
              className={styles.campo}
              type="text"
              name="cpf"
              placeholder="CPF"
            />

            <input
              className={styles.campo}
              type="text"
              name="nomeCompleto"
              placeholder="Nome Completo"
            />

            <input
              className={styles.campo}
              type="text"
              name="celular"
              placeholder="Celular"
            />
            <input
              className={styles.campo}
              type="text"
              name="endereco"
              placeholder="Endereço"
            />

            <input className={styles.campo} type="date" name="dataNascimento" />
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
            <Link to="/etapa2" href="#">

            <div className={styles.BotaoFormularioPrincipal}>
            <button className={styles.BotaoFormulario} type="submit">Enviar</button>
            </div>
            </Link>

          </form>
        </section>

        <aside className={styles.ContainerEtapaPrincipal}>
            <div className={styles.ContainerEtapa}>
            <p className={styles.MiniTextoEtapa}>
                Complete os campos ao lado para pedir sua Conta e Cartão de
                crédito
              </p>
              <img className={styles.ImgEtapa} src={Numero1} alt="primeira etapa" />
            </div>

            <div className={styles.ContainerEclipse}>
              <p className={styles.TextoEtapa}>
                Complete os campos ao lado para pedir sua Conta e Cartão de
                crédito
              </p>

              <img
                className={styles.EclipseVerde}
                src={Eclipse}
                alt="eclipse verde com bontão enviar"
              />

              <Link to="/etapa2" href="#">
              <button className={styles.botao} type="submit">
                Enviar               
              </button>
              </Link>
            </div>
        </aside>
      </main>
    </>
  );
}

export default CriarConta;
