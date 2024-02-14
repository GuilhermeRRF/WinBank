import styles from "../pages/Login.module.css";
import LogoGrande from "../imgs/LogoGrande.png";

function Login() {


  
  return (
    <>
      <main className={styles.ContainerPrincipal}>
        <section className={styles.LadoDireito}>
          <img
            className={styles.ImgLogoGrande}
            src={LogoGrande}
            alt="logo grande winbank"
          />
        </section>

        <aside className={styles.LadoEsquerdo}>

        <div className={styles.LoginPrincipal}>

          <div className={styles.TituloPrincipal}>

              <p className={styles.Titulo}>Login</p>

          </div>
          

          <div className={styles.CamposPrincipal}>

              <input className={styles.Campo} type="text" placeholder="Email"/>
              <input className={styles.Campo} type="password" placeholder="Senha"/>

          </div>

          <div className={styles.flexContainer}>
                <label className={styles.CheckboxPrincipal}>
                  
                     <input className={styles.esqueceu} type="checkbox" />
                     
                     &nbsp;  Manter Conectado   

               </label>
                 &nbsp; &nbsp; 
                 <a href="/caminho-para-resetar-senha" className={styles.linkEsqueceuSenha}>Esqueceu a senha?</a>

          </div>
              
              
              <button className={styles.botao} type="submit">Enviar</button>

    
          </div>

        </aside>
      </main>
    </>
  );
}

export default Login;
