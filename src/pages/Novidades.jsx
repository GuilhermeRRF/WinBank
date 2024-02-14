import styles from "../pages/Novidades.module.css"
import celular from "../imgs/CelularPlataformas.png"
import Qrcode from "../imgs/QrcodeWinbank.png";

function Novidades(){
    return(
        <>
                <main className={styles.Fundo}>

           
             <div className={styles.TituloNovidadesPrincipal}>


                <div className={styles.TituloNovidades}>
                
                <h1>Novidades chegando para o seu celular, fique ligado!</h1>
  
                </div>

              </div>   

              <div className={styles.CelularPrincipal}> 

                
                <div className={styles.Celular}>

                    <img className={styles.ImgCelular} src={celular} alt="" />

                </div>
  
             </div>   
   

        </main>

        <main className={styles.QrcodeWinbank}>

            <div className={styles.ContainerTexto}>

                <p className={styles.TextoQrcode}>O WinApp recomenda que você baixe 
                nosso aplicativo parceiro para uma gestão ainda mais eficiente do 
                seu saldo e cartões, garantindo que você tenha sempre as melhores 
                ferramentas financeiras ao seu alcance.</p>

            </div>

            <div className={styles.ContainerQrcodeImg}>
                
                <div className={styles.ContainerImg}>
                
                    <img className={styles.QrcodeImg} src={Qrcode} alt="Qrcode mobile" />

                </div>

            </div>


        </main>

        
        </>
    );
}

export default Novidades;