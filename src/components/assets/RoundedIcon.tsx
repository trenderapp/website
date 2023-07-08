import React from "react";
import Image from "next/image";
import styles from "./Assets.module.scss"

type sectionProps = {
    size?: number;
    src: string;
    onClick?: () => any;
    className?: string;
    notRounded?: boolean;
}

function Icon({ src, size = 33, onClick, className, notRounded }: sectionProps) {
    return (
        <Image onClick={onClick} className={`${notRounded ?? styles.rounded} ${className}`} draggable="false" width={`${size}`} height={`${size}`} src={src} alt="icon" objectFit="cover" />
    )
}

export default Icon;