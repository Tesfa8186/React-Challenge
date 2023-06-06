import React from 'react';
import css from "./Project.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faFileLines} from '@fortawesome/free-solid-svg-icons'

 function Project(props) {
    // console.log(props.projects)
    return (
    <div className='container row'>
        <div className='col s12'>
        {props.projects.map((project) => {
            return (
            <div key={project.id} className='col s12 m6 l4'>
                <div className={`card medium ${css.cardColour}`}>
                    <h4 className={`card-title white-text ${css.padding}`}>{project.title}</h4>
                    <div className='card-image'>
                        <img alt={project.title} className={` ${css.projectImg}`} src={`${process.env.PUBLIC_URL}${project.image}`}></img>
                    </div>
                    <div className={`${css.padding}`}>
                        <a className={`white-text pink btn ${css.hovering}`} href={project.github} target='_blank' rel='noreferrer'>Github Repo <FontAwesomeIcon icon={faFileLines} /></a>
                    </div>
                    <div className={`${css.padding}`}>
                        <a className={`white-text blue btn ${css.hovering}`} href={project.deploy} target='_blank' rel='noreferrer'>Deployed Link <FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            </div>
            )
        })}
        </div>

    </div>
    )
}

export default Project; 