import React from 'react';
import styles from './cards.module.scss';
import { cardData } from '../../Mock/Card'
import { useNavigate } from 'react-router-dom'
export const Cards = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.MainWrapper}>
            {cardData.map((item, index) => (
                <div className={styles.firstCard} key={index} onClick={() => navigate(`details/${item.slug}`)}>
                    <img src={item.image} />
                    <p>{item.title}</p>
                    <h3>{item.heading}</h3>
                    <p>{item.para}</p>
                </div>
            ))}

            <div className={styles.button}>
                <button>SEE ALL POSTS</button>
            </div>
        </div>
    );
};

