import React from "react";
import styles from "../../Style/All.module.scss";
import { IpropsWithChildren } from "@/interfaces";

function NavbarDiv({ children }: IpropsWithChildren) {
    return (
        <div className={styles.row}>
            { children }
        </div>
    )
}

export default NavbarDiv;