import React, { PropsWithChildren } from "react";
import styles from "@/styles/all.module.scss";

function NavbarElement({ children }: PropsWithChildren) {

    return (
        <header className={`${styles.row} ${styles.space_between} ${styles.wrap}`}>
            { children }
        </header>
    )
}

export default NavbarElement;