import React from 'react';
import styles from "./slider.module.scss"
// import slider from "./slider.scss"
// import Slider from "react-slick";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { sliderData } from '../../Mock/SliderInfo';

export const SimpleSlider = () => {

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={3}
        >
            <Slider>
                {sliderData.map((item, index) => (
                    <Slide index={index}>
                        <div className={styles.bgImg} key={index}
                            style={{
                                backgroundImage: `url(${item.image})`
                            }} >

                            <div className={styles.textWrapper}>
                                <div className={styles.textElement}>
                                    <p className={styles.text}>{item.title}</p>
                                    <h2 className={styles.text}>{item.heading}</h2>
                                </div>
                            </div>
                            {/* <img className="bgImg" src={item.image} /> */}
                        </div>
                    </Slide>
                ))}

            </Slider>
            {/* <ButtonBack className={styles["ctrl-button-prev"]}>Back</ButtonBack>
            <ButtonNext className={styles["ctrl-button-prev"]}>Next</ButtonNext> */}
        </CarouselProvider >
    );

};
// {
//     sliderData.map((item, index) => {
//         return <div className={styles.bgImg} key={index}>
//             <img className={styles.bgImg} src={item.image} />
//         </div>
//     })
// }
