import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{"Salut, c'est Benoit"}</h1>
            <p className={styles.description}>Je suis un ingénieur logiciel passionné 
            <br/> prêt à relever de nouveaux défis</p>
            <a href="mailto:ousman@gmail.com" className={styles.contactBtn}>
                Contactez-Moi
            </a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/HeroBen.png")}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}