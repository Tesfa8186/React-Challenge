import React from 'react';
import css from './Resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown} from '@fortawesome/free-solid-svg-icons'

const skills = [
  
  {
    id: 1,
    name: "HTML"},

  {
    id: 2,
    name:"CSS"},

  {
    id: 3,
    name:"GitHub"},

  {
    id: 4,
    name:'JavaScript'},

  {
    id: 5,
    name:'JQuery'},

  {
    id: 6,
    name:"Node.js"},

  {
    id: 7,
    name:'Express.js'},

  {
    id: 8,
    name:"MySQL"},

  {
    id: 9,
    name:"Mongoose"},

  {
    id: 10,
    name:"MongoDB"},

  {
    id: 11,
    name:'React'},

  {
    id: 12,
    name:"GraphQL"} 
]

 function Resume() {
    return (
      <main>
        <div className="align-item center">
          <h1>Resume</h1>
          <a className={` ${css.resumeBtn}`} href={`${process.env.PUBLIC_URL}/assets/files/My_Resume.pdf`} download><FontAwesomeIcon icon={faFileArrowDown} size='xl' /> Download my Resume</a>
          <h2>Skills</h2>
          <div className='container row'>
            <ul className='col s12 align-item center'>
              {skills.map((skill) => {
                return (
                <li className={`col s12 m4 ${css.liText}`} key={skill.id}>{skill.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    );
}

export default Resume;