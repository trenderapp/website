import React from "react";
import styles from "@/styles/all.module.scss";
import CreateLink from "../Text/Link";

type sectionProps = {
    text: string;
    href: string;
    className?: string;
}

function NavbarLink({ text, href, className }: sectionProps) {

    return (
        <CreateLink href={href} className={`${styles.uppercase} ${className}`}>
            { text }
        </CreateLink>
        
    )
}

export default NavbarLink;