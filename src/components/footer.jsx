import styles from "../components/footer.module.css"
import whats from"../imgs/whats.png"
import insta from "../imgs/insta.png"
import x from "../imgs/twitterx.png"
import face from "../imgs/face.webp"
import apple from "../imgs/baixarapple.png"
import googleplay from "../imgs/baixargoogleplay.png"
import { Link } from "react-router-dom";
function Footer(){
    return(

    <footer className={styles.Footer}>
        
        <div className={styles.blocoprincipal}>

        <div  className={styles.bloco1}>
            
            <ul className={styles.lista}>
             <li><Link className={styles.linksprincipal} to={{ pathname: "/", hash: "#secao4" }} href="#">Winbank</Link></li>
             <li><Link className={styles.links} to={{ pathname: "/", hash: "#secao4" }} href="#">Sobre nós </Link></li>
             <li><Link className={styles.links} to={{ pathname: "/", hash: "#secao4" }}> Carreira</Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#"> Contato</Link></li>
            </ul>
            
        </div>

        
        <div  id={styles.bloco} className={styles.bloco2}>
            
        <ul className={styles.lista}>
             <li><Link className={styles.linksprincipal} to="/ajuda" href="#">Ouvidoria</Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#">0800 688 7000 </Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#">falawinbank@win.br</Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#">Atendimento das 8hás 19h30 (dias uteis)</Link></li>
        </ul>
            
        </div>     

        
        <div  id={styles.bloco} className={styles.bloco3}>
            
        <ul className={styles.lista}>
             <li><Link className={styles.linksprincipal} to="/ajuda" href="#">Fala com a gente</Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#">0800 608 6238</Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#">meajuda@winbank.com.br</Link></li>
             <li><Link className={styles.links} to="/ajuda" href="#">Atendimento 24h</Link></li>
       </ul>
             
        </div>    
   

        <div  className={styles.bloco4}>
            
            <div className={styles.containerredes}>
    
            
          <Link to="/novidades"> <img  className={styles.baixarg} src={apple}></img></Link>
          <Link to="/novidades" >  <img  className={styles.baixara} src={googleplay}></img></Link>
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