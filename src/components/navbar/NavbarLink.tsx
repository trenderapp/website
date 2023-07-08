import React from "react";
import styles from "@/styles/all.module.scss";
import { Link } from "@/components";

type sectionProps = {
    text: string;
    href: string;
    className?: string;
}

function NavbarLink({ text, href, className }: sectionProps) {

    return (
        <Link href={href} className={`${styles.uppercase} ${className}`}>
            { text }
        </Link>
        
    )
}

export default NavbarLink;