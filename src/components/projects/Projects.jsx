// eslint-disable-next-line no-unused-vars
import React from "react";
import projects from "../../data/projects.json";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";

export const Projects = () => {
    return (
    <section className={styles.container} id="projet">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project, id)=>{
                return <ProjectsCard key={id} project={project}/>
            })}
        </div>
    </section>)
}