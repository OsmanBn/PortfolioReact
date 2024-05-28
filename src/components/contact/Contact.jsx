import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = ()=>{
    return <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Contactez-moi</p>
        </div>
        <ul  className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon'/> 
                <a href="mailto:ousmanbenoit@gmail.com">ousmanbenoit@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')}/> 
                <a href="https://www.linkedin.com/in/benoît-ousman">linkedin.com/in/benoît-ousman</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Email icon'/> 
                <a href="https://www.github.com/Osmanbn">github.com/Osmanbn</a>
            </li>
        </ul>
    </footer>
}