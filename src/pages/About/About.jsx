import React from 'react';
import css from './About.module.css';

 function About() {
    return (
      <main className='container row'>
        <div className="align-item center">
          <h1>About Me</h1>
          <img width="350px" alt="Profilephoto" src={`${process.env.PUBLIC_URL}/assets/images/Profilephoto.jpg`}></img>
          <p className={`col s12 ${css.aboutText}`}>
          Hello My name is Tesfa Weldemichael and lives in Perth Australia since 2004. I have family with 2 kids.
          <p>I am Full Stack Junior Website Developer from University of Western Australia (UWA).</p>
          <p>I love to expand my skills with continuous practice & dedicated myself.</p> 
          </p>
        </div>
      </main>
    );
}

export default About;