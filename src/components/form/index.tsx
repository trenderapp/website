import React, { PropsWithChildren } from "react";
import styles from "./form.module.scss";
import { Text } from "../";

type sectionProps = PropsWithChildren<{
    className?: string;
    title?: string;
    error?: {
        is_error: boolean;
        content: string
    }
}>

function Form({ children, title, error }: sectionProps) {

    return (
        <div className={styles.global}>
            <div className={styles.form}>
                <p className={styles.title}>{title}</p>
                { error && <Text color="error" >{error.content}</Text> }
                { children }
            </div>
        </div>
    )
}

export default Form;