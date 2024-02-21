import styles from "../pages/Etapa3.module.css";
import Eclipse from "../imgs/EclipseVerde.png";
import Numero3 from "../imgs/Numero3.png";

function Etapa3() {
  return (
    <>
      <main className={styles.SecaoPrincipal}>
        <section className={styles.ContainerCaixaPrincipal}>
          <div className={styles.Caixa}>    
          <p className={styles.TextoAgradecimento}> Nós da WInbank agradecemos pelo seu voto de confiaça, seu cartão
            chegara em breve aguarde novas instruções por email.</p> 
          </div>
        </section>

        <aside className={styles.ContainerEtapaPrincipal}>
            <div className={styles.ContainerEtapa}>
              <p className={styles.MiniTextoEtapa}>
                Criando conta para logar na plataforma, você pode logar
                colocando o CPF ao inves do Email
              </p>
              <img
                className={styles.ImgEtapa}
                src={Numero3}
                alt="primeira etapa"
              />
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
            </div>
        </aside>
      </main>
    </>
  );
}

export default Etapa3;
