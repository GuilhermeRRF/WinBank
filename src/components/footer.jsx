import styles from "../components/footer.module.css"
import whats from"../imgs/whats.png"
import insta from "../imgs/insta.png"
import x from "../imgs/twitterx.png"
import face from "../imgs/face.webp"
import apple from "../imgs/baixarapple.png"
import googleplay from "../imgs/baixargoogleplay.png"
function Footer(){
    return(

    <footer className={styles.Footer}>
        
        <div className={styles.blocoprincipal}>

        <div  className={styles.bloco1}>
            
            <ul className={styles.lista}>
             <li><a className={styles.linksprincipal} href="#">Winbank</a></li>
             <li><a className={styles.links} href="#">Sobre nós </a></li>
             <li><a className={styles.links} href="#">Carreira</a></li>
             <li><a className={styles.links}href="#">Contato</a></li>
            </ul>
            
        </div>

        
        <div  id={styles.bloco} className={styles.bloco2}>
            
        <ul className={styles.lista}>
             <li><a className={styles.linksprincipal} href="#">Ouvidoria</a></li>
             <li><a className={styles.links} href="#">0800 688 7000 </a></li>
             <li><a className={styles.links} href="#">falawinbank@win.br</a></li>
             <li><a className={styles.links} href="#">Atendimento das 8hás 19h30 (dias uteis)</a></li>
        </ul>
            
        </div>     

        
        <div  id={styles.bloco} className={styles.bloco3}>
            
        <ul className={styles.lista}>
             <li><a className={styles.linksprincipal} href="#">Fala com a gente</a></li>
             <li><a className={styles.links} href="#">0800 608 6238</a></li>
             <li><a className={styles.links} href="#">meajuda@winbank.com.br</a></li>
             <li><a className={styles.links} href="#">Atendimento 24h</a></li>
       </ul>
             
        </div>    
   

        <div  className={styles.bloco4}>
            
            <div className={styles.containerredes}>
    
            
            <img  className={styles.baixarg} src={apple}></img>
            <img  className={styles.baixara} src={googleplay}></img>
            <p className={styles.titulomobile}>Rede Sociais</p>
            <div className={styles.caixaplataforma}>
            <img  className={styles.whats} src={whats}></img>
            <img  className={styles.insta} src={insta}></img>
            <img  className={styles.twitterx} src={x}></img>
            <img  className={styles.face} src={face}></img>
            </div>
            </div>
                 
         </div>    
    
      
       </div>   

       <div className={styles.minitexto}>

            <p>© 2022 win Pagamentos S.A - Instituição de Pagamento. 18.236.777/0001-58
            Rua Tito Valente, 77 - São Paulo, SP - 05409-700</p>

        </div>  


    </footer>

    );
}

export default Footer;