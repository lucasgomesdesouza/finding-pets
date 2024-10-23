import React from 'react';
import styles from './TestimonialCard.module.css';
import pinscherRelatoUm from '../../assets/images/pinscher_relato1.png'
import pinscherRelatoDois from '../../assets/images/pinscher_relato2.png'
import pinscherRelatoTres from '../../assets/images/pinscher_relato3.png'
import pinscherRelatoQuatro from '../../assets/images/pinscher_relato4.png'
import deborahPavanelli from '../../assets/images/deborah.png'

const TestimonialCard = () => {
  return (
    <div className={styles.testimonialSection}>
        <div>
            <h1>FindingPet Lovers</h1>
        </div>
        <div className={styles.testimonialCard}>
            <div>
                <img src={deborahPavanelli} alt="Déborah Pavanelli" />
            </div>
            <div className={styles.textImage}>
                <div className={styles.testimonialText}>
                    <div className={styles.testimonialPersonData}>
                        <h2>Déborah Pavanelli</h2>
                        <span>São Paulo - SP</span>
                    </div>
                    <p>Acabei de adotar dois cachorros, e isso tem sido uma das melhores decisões da minha vida! São o Tisco e o  Beto, e desde o momento em que eles chegaram em casa, trouxe tanta alegria e amor. Ver a felicidade nos olhos deles ao correr pelo quintal ou se aconchegar no sofá é simplesmente indescritível.
                    Tudo isso só foi possível graças ao FindingPet. O site tornou o processo de adoção super simples e acessível. Além de ter uma interface amigável, eles cuidam de cada detalhe para garantir que os animais encontrem lares amorosos. Foi incrível ver como eles se importam com cada pet e com cada pessoa que busca adotar.
                    Se você está pensando em ter um animal de estimação, recomendo fortemente que visite o FindingPet. Além de ganhar um novo amigo, você estará dando uma nova chance a um animal que precisa. Tisco e Beto mudaram minha vida de uma forma tão positiva, e tenho certeza de que, com a ajuda do FindingPet, você também pode viver essa experiência maravilhosa!
                    </p>
                </div>
                <div className={styles.petImages}>
                    <img src={pinscherRelatoUm} alt="Foto dos pinscher adotados" />
                    <img src={pinscherRelatoDois} alt="Foto dos pinscher adotados" />
                    <img src={pinscherRelatoTres} alt="Foto dos pinscher adotados" />
                    <img src={pinscherRelatoQuatro} alt="Foto dos pinscher adotados" />
                </div>
            </div>
        </div>
    </div>
  );
};


export default TestimonialCard;
