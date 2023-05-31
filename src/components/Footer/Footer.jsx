import React from 'react';
import css from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'

 function Footer() {
    return (
        <footer className={`${css.footerFixed}`}>
            <p className='text-align center'>Prepare By Tesfa</p>
            <div className='align-item center'>
                <a href="https://github.com/Tesfa8186" target='#_blank'> <FontAwesomeIcon icon={faGithub} size='3xl' /></a>
                <a href="https://www.linkedin.com/in/tesfa-weldemichael-27471295/" target='#_blank'> <FontAwesomeIcon icon={faLinkedin} size='3xl' /></a>
            </div>
        </footer>
    )
}

export default Footer;