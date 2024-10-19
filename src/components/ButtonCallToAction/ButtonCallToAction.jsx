import React from "react";
import styles from "./ButtonCallToAction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonCallToAction = ({ icon, text }) => {
    return (
        <button className={styles.button}>
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} className={styles.icon} />
            </div>
            <span className={styles.text}>{text}</span>
        </button>
    );
};

export default ButtonCallToAction;
