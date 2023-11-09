import React from "react";
import styles from "./Animations.module.scss";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 40,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    whileInView: {
            y: 0,
            opacity: 1,
            transition: {
            duration: 0.6,
            ease: easing
        }
    },
    viewport: { 
        once: true
    }
};

const fadeInLeft = {
    initial: {
        x: -40,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    whileInView: {
            x: 0,
            opacity: 1,
            transition: {
            duration: 0.6,
            ease: easing
        }
    },
    viewport: { 
        once: true
    }
};

type sectionProps = {
    image?: {
        src: string;
        alt: string;
    } 
    title_1: string;
    text_1: string;
    text_2: React.ReactElement;
}

function AnimatedTwoDivBox({ title_1, text_1, text_2, image = {
    alt: "thumbnail",
    src: "/assets/12promax.png"
}}: sectionProps) {

    return (
        <motion.div className={styles.box}>
        <motion.div className={`${styles.box_image}`}>
            <motion.div {...fadeInLeft} className={styles.informations}>
                <motion.div {...fadeInLeft} className={styles.image}>
                    <motion.img style={{
                        maxWidth: 500,
                        maxHeight: 500
                    }} src={image.src} alt={image.alt} />
                </motion.div>
                <motion.div {...fadeInLeft} style={{
                    width: "100%",
                    boxFlex: 1,
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                }}>{text_2}</motion.div>
            </motion.div>
            <motion.div className={styles.informations}>     
                <motion.h1 {...fadeInUp} className={styles.title}>{title_1}</motion.h1>
                <motion.p {...fadeInUp} className={styles.text}>{text_1}</motion.p>
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default AnimatedTwoDivBox;