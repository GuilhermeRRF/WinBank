import styles from "../components/header.module.css";
import logopequeno2 from "../imgs/logopequeno2.png";
import { Link } from "react-router-dom";
import iconeusuario from "../imgs/user.png";
import UsuarioIcons from "../imgs/UsuarioIconsB.png"

function Header() {
  
  return (
    <>
      <nav className={styles.NavPrincipal}>
        <header className={styles.headerprincipal}>

        
        <Link to="/">
          <div className={styles.menu}>
              <img className={styles.logopequeno} src={logopequeno2}></img>
          </div>
          </Link>

          <ul className={styles.lista}>

            <li className={styles.LiResponsiva}>

            <Link className={styles.linkloginresponsivo} to="/login">
          <div className={styles.iconeusuarioresposivo}>
            <img className={styles.userresponsivo} src={UsuarioIcons}></img>
          </div>
          </Link>

            </li>

            <li>
              <Link className={styles.link} to="/" href="#">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={{ pathname: "/", hash: "#secao2" }}>
                Conta
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/novidades" href="#">
                Novidades
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/ajuda" href="#">
                Ajuda
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={{ pathname: "/", hash: "#secao4" }}>
                Sobre nós
              </Link>
            </li>
            
          </ul>
          <Link className={styles.LinkFazerLogin} to="/perfilpessoal">
          <div className={styles.BotaoLoginPrincipal}>
             <button className={styles.BotaoLogin} > Fazer Login </button>
          </div>
          </Link>

        </header>
      </nav>
    </>
  );
}

export default Header;
