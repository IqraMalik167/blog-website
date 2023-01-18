import React from 'react';
import styles from './subscription.module.scss';
export const Subscription = () => {
    return (
        <div>
            <h2>Get Our Monthly Newsletter, Directly Into Your Inbox!</h2>
            <div className={styles.mainWrapper}>
                <input type='test'>Your Name</input>
                <input type='test'>Email Address</input>
                <button className={styles.button}>Subscribe</button>
            </div>
        </div>
    );
};

