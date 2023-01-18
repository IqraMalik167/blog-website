import React from "react";
import styles from "./title.module.scss"
export const Title = () => {
    return (
        <div className={styles.main}>
            <h1>Unletro</h1>
            <div className={styles.divider}></div>
            <div className={styles.categoties}>

                <li>Architecture</li>
                <li>Design</li>
                <li>Urbanism</li>
                <li>Ecobuilding</li>
                <li>All Posts</li>
            </div>
            <div className={styles.divider}></div>

        </div>
    );
};

