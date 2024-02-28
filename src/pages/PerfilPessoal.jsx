import styles from "../pages/PerfilPessoal.module.css";
import FotoPerfil from "../imgs/FotoPerfilPessoal.png";
import { Link } from "react-router-dom";

function PerfilPessoal() {
  return (
    <>
      <main className={styles.PaginaPessoalPrincipal}>
        <div className={styles.FotoPerfilPrincipal}>
          <img
            className={styles.FotoPerfil}
            src={FotoPerfil}
            alt="foto pessoal do usuario"
          />
        </div>

        <div className={styles.PerfilDadosPessoais}>
          <div className={styles.TituloPerfilPrincipal}>
            <p className={styles.TituloPerfil}>Guilherme Romeiro</p>
          </div>

          <div className={styles.MiniDadosPerfilPrincipal}>
            <div className={styles.MiniDadosPerfil}>
              <p className={styles.Perfil}>São Bernabel</p>
              <p className={styles.Perfil}>Tel: 951561686</p>
            </div>

            <div className={styles.MiniDadosPerfil2}>
              <p className={styles.Perfil2}>21 anos</p>{" "}
              <p className={styles.Perfil2}>Tipo de Conta: Corrente</p>
            </div>
          </div>
        </div>
      </main>

      <div className={styles.linha}></div>

      <div className="TituloPrincipal">
        <p className={styles.Titulo}> Dados Cadastrais</p>
      </div>

      <section className={styles.PaginaCadastralPrincipal}>
        <div className={styles.FormularioDireito}>
          <form className={styles.ContainerFormulario}>
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

            <input
              className={styles.campo}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </form>
        </div>

        <div className={styles.FormularioEsquerdo}>
          <form className={styles.ContainerFormulario2}>
            <input
              className={styles.campo}
              type="text"
              name="cpf"
              placeholder="CPF"
            />

            <select
              className={styles.campo}
              name="accountType"
              id="accountType"
            >
              <option value="corrente">Corrente</option>
              <option value="poupanca">Conta Poupança</option>
              <option value="kids">Conta Kids</option>
            </select>

            <input className={styles.campo} type="date" name="dataNascimento" />

            <input
              className={styles.campo}
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              required
            />
          </form>
        </div>
      </section>
      
      <div className={styles.BotaoInferior}>
              <button className={styles.BotaoFormulario2} type="submit">
                Alterar Informações
              </button>
              
              <button className={styles.BotaoFormulario} type="submit">
              <Link className={styles.LinkBotao}  to="/">
                  Sair
              </Link>
              </button>

            </div>
    </>
  );
}

export default PerfilPessoal;
