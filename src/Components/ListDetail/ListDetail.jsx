import React from 'react';
import { listData } from '../../Mock/ListDetail';
import styles from "./listDetail.module.scss";


export const ListDetail = ({ data }) => {
    return (
        <div className={styles.MainWrappers}>


            <img className={styles.bannerImg} src={data.image} />

            <div className={styles.textWrapper}>
                <p className={styles.title}> {data.title}</p>
                <h2>{data.heading}</h2>
                <p>{data.para}</p>

                <div className={styles.authorInfo}>
                    <img></img>
                    <p>{data.author}</p>
                </div>

                <div className={styles.blog}>
                    <h3>OverView</h3>
                    <p> {data.overView}</p>
                </div>
                <div className={styles.qoute}>
                    <p>{data.qouts}</p>
                </div>
                <p className={styles.overViewTwo}>{data.overViewTow}</p>

                <h3>The End</h3>
                <p>{data.theEnd}</p>
                <div className={styles.tags}>
                    <h5>Tags</h5>
                    <p>{data.tags}</p>
                </div>
            </div>




        </div>








        // <div className={styles.MainWrappers}>
        //     <div>
        //         <img src='../assets/card1.jpg' />
        //     </div>
        //     <div className={styles.textWrapper}>
        //         <p>Architecture</p>
        //         <h2>What Will Website Be Like In 100 Years?</h2>
        //         <p>Lorem ipsum dolor sit amet, nam autem semper vocent in, ei tantas consequuntur cum.
        //             Vis fierent voluptatibus id eam suas erant...</p>
        //         <div className={styles.writeInfo}>
        //             <img></img>
        //             <p>By Albert Wunsch on Jan 31, 2017</p>
        //         </div>
        //         <div className={styles.blog}>
        //             <h3>Overview</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        //                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        //                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        //                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        //                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //                 Cras pulvinar ultricies vehicula. Cras et nulla id lorem vulputate pulvinar eget non neque.
        //                 Proin feugiat justo vitae euismod fringilla. In a nunc commodo, elementum metus a, aliquam metus.
        //                 Nulla porttitor malesuada urna non convallis. Duis luctus fermentum ex elementum egestas. Donec lobortis
        //                 lectus ut nisi ultricies, in scelerisque ante egestas. Maecenas quis ipsum nunc. Donec pulvinar tortor nec
        //                 neque pellentesque ullamcorper bibendum eu orci. </p>
        //         </div>
        //         <div className={styles.qoute}>
        //             <p>Life is about making an impact not making an income</p>
        //         </div>
        //         <p>Duis non ante quis est aliquet bibendum. Curabitur fermentum a odio sed sodales. Phasellus suscipit
        //             semper iaculis. Morbi pretium imperdiet tempus. Pellentesque tincidunt odio eros, eu aliquam nisl
        //             fringilla nec.</p>
        //         <p>Curabitur euismod pellentesque dapibus. Maecenas a pretium odio. Morbi porta congue tempus. Donec consequat
        //             condimentum ligula, id dapibus lorem tincidunt non. Aliquam vitae lacus congue, ultrices nibh quis, aliquam
        //             turpis.</p>
        //         <h3>The End</h3>
        //         <p>Pellentesque sit amet odio nisi. Phasellus quis lorem leo. Aenean tempor, nisl in mollis maximus, libero
        //             diam finibus tellus, at sagittis tellus eros vitae nisi. Sed dignissim augue sit amet diam laoreet venenatis.
        //             Aliquam bibendum erat eu nisi faucibus dignissim. Phasellus dignissim est tempor eros pulvinar luctus.
        //             Nam vulputate, risus a efficitur cursus, felis dolor vulputate mi, ac eleifend libero velit sed nunc.
        //             Sed in justo ac leo sodales suscipit. Etiam rhoncus porta massa a volutpat. Vestibulum ultrices sollicitudin
        //             eleifend.</p>
        //         <div className={styles.tags}>
        //             <h5>Tags:</h5>
        //             <p>Apartment FCC Building</p>
        //         </div>
        //     </div>

        // </div>
    );
};

