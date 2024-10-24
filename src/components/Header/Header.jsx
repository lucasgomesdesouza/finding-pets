import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png';
import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo da ONG Finding Pet" className={styles.logo}/>
            </div>
            
            <nav className={`${styles.navigation} ${menuOpen ? styles.active : ''}`}>
                <ul>
                    <li className={styles.link}><Link to="/">Início</Link></li>
                    <li className={styles.link}><Link to="/news">Novidades</Link></li>
                    <li className={styles.link}><Link to="/adopt">Adote</Link></li>
                    <li className={styles.link}><Link to="/care">Cuidados</Link></li>
                    <li className={styles.link}><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
            
            {/* Botão do Ícone de Hambúrguer */}
            <button className={styles.hamburger} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className={styles.icon} />
            </button>

            <div className={styles.icons}>
                <Link to="/sign-up" className={styles.iconButton}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                </Link>
                <button type="button" className={styles.iconButton}>
                    <FontAwesomeIcon icon={faMoon} className={styles.icon} />
                </button>
            </div>


        </header>
    );
}

export default Header;
