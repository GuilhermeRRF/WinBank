import styles from "../pages/PerfilPessoal.module.css";
import FotoPerfil from "../imgs/FotoPerfilPessoal.png";

function PerfilPessoal(){
    return(


        <>
        <main className={styles.PaginaPessoalPrincipal}>

        <div className={styles.FotoPerfilPrincipal}>

            <img className={styles.FotoPerfil} src={FotoPerfil} alt="foto pessoal do usuario" />
            
        </div>

        <div className={styles.PerfilDadosPessoais}>
            <div className={styles.TituloPerfilPrincipal}>
            <p className={styles.TituloPerfil}>Guilherme Romeiro</p>
            </div>
           
            <div className={styles.MiniDadosPerfilPrincipal}>
            <div className={styles.MiniDadosPerfil}>
            <p className={styles.Perfil}>São Bernabel</p><p className={styles.Perfil}>Tel: 951561686</p>
            </div>

            <div className={styles.MiniDadosPerfil2}>
            <p className={styles.Perfil2}>21 anos</p> <p className={styles.Perfil2}>Tipo de Conta: Corrente</p>
            </div>
            </div>
        </div>

        </main>
        <div className={styles.linha}>

        </div>
        <section className={styles.PaginaCadastralPrincipal}>


            Dados Cadastrais


        </section>
        </>


    );
}

export default PerfilPessoal;