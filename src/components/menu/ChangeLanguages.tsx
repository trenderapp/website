import React, { useState } from "react";
import FixedMenu from "./FixedMenu";
import FixedMenuStyle from "./Menu.module.scss";
import styles from "@/styles/all.module.scss";
import { useTranslation, languageList } from "@/context/Localization";
import Svg from "../svg";
import { RoundedIcon } from "../assets";
import { cdnbaseurl } from "@/services/constante";

type sectionProps = {
    size: number;
    displayText: boolean;
}

function ChangeLanguages({ size, displayText }: sectionProps) {

    const { t, setLanguage, currentLanguage } = useTranslation();
    const [display, setDisplay] = useState(false);

    return (
        <div>
            <span className={styles.row}><Svg size={size} margin={displayText ? 0 : 5} name="globe" hover pointer onClick={() => setDisplay(true)} /> {displayText && t("language")}</span>
        {
            display && <FixedMenu oustideClick={setDisplay}>
                {
                    languageList.map((l, index) => <span 
                        onClick={() => setLanguage(l)} 
                        key={index} 
                        className={`${styles.row} ${l.locale === currentLanguage.locale ? FixedMenuStyle.selected : ""} ${styles.justify_center} ${styles.full_width} ${styles.padding_10} ${styles.border_bottom} ${styles.pointer} ${styles.hover}`}>
                        <RoundedIcon size={22} src={`${cdnbaseurl}/assets/icons/flags/${l.locale}.png`} /> {l.language}
                        </span>
                    )
                }
                <span onClick={() => setDisplay(false)} className={`${styles.row} ${styles.justify_center} ${styles.full_width} ${styles.padding_10} ${styles.pointer} ${styles.hover}`}>{t("cancel")}</span>
             </FixedMenu>
        }
        </div>
    )
}

export default ChangeLanguages;