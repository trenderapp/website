import React, { PropsWithChildren } from "react";
import Markdown from "./Markdown/Markdown";
import { postInterface } from "trender-client/Managers/Interfaces/Post";
import styles from "./text.module.scss";
import { classNames } from "@/services";

type sectionProps = PropsWithChildren<{
    markdown?: boolean;
    info?: postInterface;
    color?: "normal" | "error";
    underline?: boolean;
}>

export default function Text({ children, markdown = false, color = "normal", info, underline }: sectionProps) {
    return markdown ? <Markdown info={info} content={children ?? <br />} disallowBigEmoji={undefined} /> : (
        <p className={classNames([
            styles[color === "normal" ? "normal" : "error"],
            underline ? styles.underline : ""
        ])}>{children}</p>
    )
}