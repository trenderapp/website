import React from "react";
import styles from "@/styles/all.module.scss";

function NavbarDiv({ children }: React.PropsWithChildren) {
    return (
        <div className={styles.row}>
            { children }
        </div>
    )
}

export default NavbarDiv;