import React from 'react';
import styles from './latestEntries.module.scss';
import { latestEntriesData } from '../../Mock/LatestEntries'


export const LatestEntries = () => {
    return (
        <div>
            <div>
                <div className={styles.headingWrapper}>
                    <h3>Latest Entries</h3>
                    <div className={styles.divider}></div>
                </div>
            </div>

            <div className={styles.MainWrapper}>





                {latestEntriesData.map((item, index) => (
                    <div className={styles.firstCard} key={index}>
                        <img src={item.image} />
                        <p>{item.title}</p>
                        <h3>{item.heading}</h3>
                        <p>{item.author}</p>
                    </div>
                ))}

                <div className={styles.button}>
                    <button>BACK TO BLOG</button>
                </div>
            </div>
        </div>
    );
};

