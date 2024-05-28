import { getImageUrl } from '../../utils';
import styles from './About.module.css'; 

export const About = ()=>{
    return <section className={styles.container} id='about'>
        <h2 className={styles.aboutTitle}>A propos</h2>
        <div className={styles.content}>
            <img 
                className={styles.aboutImage} 
                src={getImageUrl("about/aboutImage.png")} 
                alt="image"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img  src={getImageUrl('about/cursorIcon.png')}/>    
                    <div className={styles.aboutItemText}>
                        <h3>Développeur frontend</h3>
                        <p>{"Conception d'interface graphique de qualité"}</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img  src={getImageUrl('about/serverIcon.png')}/>    
                    <div className={styles.aboutItemText}>
                        <h3>Développeur Backend</h3>
                        <p>Utilisation des principes du génie logiciel et des nouvelles technologies </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img  src={getImageUrl('about/uiIcon.png')}/>    
                    <div className={styles.aboutItemText}>
                        <h3>Analyste de donnée</h3>
                        <p>{"Travaux d'analyse des données, nettoyage, tri, visualisation..."}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}