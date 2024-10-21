import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png';
import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo da ONG Finding Pet" className={styles.logo}/>
            </div>
            <nav>
                <ul className={styles.navigation}>
                    <li className={styles.link}><Link to="/">Início</Link></li>
                    <li className={styles.link}><Link to="/news">Novidades</Link></li>
                    <li className={styles.link}><Link to="/adopt">Adote</Link></li>
                    <li className={styles.link}><Link to="/care">Cuidados</Link></li>
                    <li className={styles.link}><Link to="/contact">Contato</Link></li>
                    <li className={styles.link}><Link to="/about-us">Sobre Nós</Link></li>
                </ul>
            </nav>
            <div className={styles.icons}>
                <button type="button" className={styles.iconButton}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                </button>
                <button type="button" className={styles.iconButton}>
                    <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                </button>
            </div>
        </header>
    );
}

export default Header;
