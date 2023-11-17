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

type sectionProps = {
    title?: string;
    button?: React.ReactNode;
    text?: string
}

function AnimatedTextTitle({ title, text, button }: sectionProps) {

    return (
        <motion.div className={styles.box}>
            <motion.div className={styles.box_text}>
                { title && <motion.h2 {...fadeInUp} className={styles.title}>{title}</motion.h2> }
                { text && <motion.h3 {...fadeInUp} className={styles.text}>{text}</motion.h3> }
                { button && <motion.div {...fadeInUp} className={styles.button}>{button}</motion.div> }
            </motion.div>
        </motion.div>
    )
}

export default AnimatedTextTitle;