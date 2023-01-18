import React from 'react';
import styles from "./listsPost.module.scss";

export const ListsPost = () => {
    return (
        <div>
            <div className={styles.mainWrapper}>
                <h3>Latest Posts</h3>
                <div className={styles.divider}></div>
            </div>
        </div>
    );
};

