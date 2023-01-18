import React from 'react';
import styles from "./navbar.module.scss"
export const Navbar = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.bar}>
                <div className={styles.lists}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </div>
            </div>

        </div>
    );
};

