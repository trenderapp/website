import React from "react";
import styles from "./Animations.module.scss";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

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
    reverse?: boolean;
    title: string;
    image: {
        src: string;
        alt: string
    };
    text: string
}

function AnimatedBoxImage({ reverse = false, title, image, text }: sectionProps) {

    return (
        <motion.div className={styles.box}>
            <motion.div className={`${styles.box_image} ${reverse ? styles.reverse : ""}`}>
                <motion.div className={styles.image}>
                    <motion.img {...fadeInUp} src={image.src} alt={image.alt} />
                </motion.div>
                <motion.div className={styles.informations}>     
                    <motion.h2 {...fadeInUp} className={styles.title}>{title}</motion.h2>
                    <motion.p {...fadeInUp} className={styles.text}>{text}</motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AnimatedBoxImage;