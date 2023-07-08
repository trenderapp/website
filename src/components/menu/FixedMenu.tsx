import React, { PropsWithChildren } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import styles from "./Menu.module.scss";

type sectionProps = PropsWithChildren<{
    oustideClick: (bool: boolean) => any;
    width?: number;
    text_left?: boolean;
}>

function FixedMenu({ children, oustideClick, width = 400, text_left = false }: sectionProps){
    return (
        <div className={styles["fixed-menu"]}>   
            <OutsideClickHandler onOutsideClick={() => oustideClick(false)} >
                <div style={{
                    gap: "10px",
                    width: `${width}px`,
                    maxWidth: `100vw`
                }} className={`${styles.box} ${text_left ?? styles.align_center}`}>
                    { children }
                </div>  
            </OutsideClickHandler>
        </div>
    )
}

export default FixedMenu;