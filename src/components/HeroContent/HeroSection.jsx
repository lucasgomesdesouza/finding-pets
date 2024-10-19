import React from "react";
import styles from "./HeroSection.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import goldenRetriver from "../../assets/images/goldenzinho_ownt.png";
import ButtonCallToAction from "../ButtonCallToAction/ButtonCallToAction";

const HeroSection = () => {
    return (
        <div className={styles.hero_section}>
            <div>
                <img src={goldenRetriver} alt="Foto de um cão da raça golden retriever" />
            </div>
            <div>
                <h2>O seu melhor amigo com um clique!</h2>
                <p>
                    Com responsabilidade e conforto, FindingPet te permite
                    adotar o pet que você tanto procura diretamente da sua casa,
                    um companheiro de quatro patas para sua vida.
                </p>
                <ButtonCallToAction icon={faArrowRight} text="ADOTE"/>
            </div>
        </div>
    );
}

export default HeroSection;
