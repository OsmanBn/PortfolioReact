// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import propTypes from 'prop-types'
import styles from './ProjectsCard.module.css';

export const ProjectsCard = ({
    project: {imageSrc, title, description, skills, demo, source}
}) => {

    return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt="Titre manquant" className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills? skills.map((skill, id)=>(
                <li key={id} className={styles.skill}>{skill}</li>
            ))
        :''}
        </ul>
        <div className={styles.links}>
            
            <a href={source} className={styles.link}>code source</a>
        </div>
    </div>);
}

ProjectsCard.propTypes = {
    project: propTypes.object,
    imageSrc: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    skills: propTypes.array,
    demo: propTypes.string,
    source: propTypes.string
}