import React from "react";
import styles from "./Animations.module.scss";
import { motion } from "framer-motion";
import CreateLink from "../Text/Link";
import Svg from "../svg";

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
    icon?: string;
    link: string;
    text?: string
}


function AnimatedIconBox({ text, icon, link }: sectionProps) {

    return (
        <CreateLink className={styles.second_box} href={link}>
            <motion.div {...fadeInUp} className={styles.box_icon}>
                { icon && <Svg noColor size={20} name={icon} /> }
                { text && <span>{text}</span> }
            </motion.div>
        </CreateLink>
    )
}

export default AnimatedIconBox;