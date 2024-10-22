import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCallToAction from "../../ButtonCallToAction/ButtonCallToAction";
import styles from "./SignUpForm.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
    return (
        <div className={styles.fullScreenContainer}>
            <div className={styles.container}>
                <div className={styles.loginSection}>
                    <h1>Bem-vindo de volta</h1>
                    <p>Para continuar conectado conosco faça o login</p>
                    <ButtonCallToAction icon={faArrowRight} text="Logar" />
                </div>
                <div className={styles.signupSection}>
                    <h2>Crie uma conta</h2>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
                        <FontAwesomeIcon icon={faGoogle} className={styles.socialIcon} />
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                    </div>
                    <p className={styles.orText}>Ou use seu e-mail para registro</p>
                    <form action="" className={styles.formForm}>
                        <div className={styles.formGroup}>
                            <input type="text" id="name" placeholder="Nome" />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="password" id="senha" placeholder="Senha" />
                        </div>
                    </form>
                    <div className={styles.formButton}>
                        <ButtonCallToAction icon={faArrowRight} text="Criar conta" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;