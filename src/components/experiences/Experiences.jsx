import { getImageUrl } from '../../utils';
import styles from './Experiences.module.css';
import skill from '../../data/skill.json';
import history from '../../data/history.json';

export const Experiences = () => {
    return <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experiences</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skill.map((skill, id)=>{
                    return <div key={id} className={styles.skill}>
                        <div className={styles.imageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p className={styles.skillTitle}>{skill.title}</p>
                    </div>
                })}
            </div>
            <div className={styles.attestation}>
                <h2>Attestations</h2>
                <ul className={styles.history}>
                    {history.map((experience, id)=>(
                        <li key={id} className={styles.historyItem}>
                            
                            <div className={styles.historyItemDetails}>
                                <h3>{experience.role}</h3>
                                <p>{experience.organisation}</p>
                                <a href={experience.lien}>lien de la certification</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}