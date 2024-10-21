import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CareDogs.module.css";

const CareDogs = ({ icon, texts, imgSrc, altText, side = "left" }) => {
  return (
    <div
      className={`${styles.careDogs} ${
        side === "right" ? styles.imageRight : styles.imageLeft
      }`}
    >
      <div className={styles.careDogsImage}>
        <img src={imgSrc} alt={altText} />
      </div>
      <div className={styles.careDogsContent}>
        {texts.map((text, index) => (
          <div key={index} className={styles.careDogsItem}>
            <FontAwesomeIcon icon={icon} className={styles.careDogsIcon} />
            <p className={styles.careDogsText}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareDogs;
