import styles from "./link.module.scss";
import NextLink from "next/link";
import { classNames } from "@/services";
import { UrlObject } from 'url';
import React from "react";

type Url = string | UrlObject;

type sectionProps = React.PropsWithChildren<{
    href: Url;
    type?: "text" | "contained" | "outlined";
    disable?: boolean;
    uppercase?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
    className?: string;
    underline?: boolean;
}>

export default function Link({ children, href, type = "text", target, disable, uppercase = false, className, underline }: sectionProps) {
    return (
        <NextLink href={href} className={classNames([
            styles.global,
            styles[uppercase ? "uppercase" : ""],
            styles[href ? "pointer" : ""],
            styles[disable ? "noHover" : ""],
            styles[type === "contained" ? "contained" : type === "outlined" ? "outlined" : type],
            underline ? styles.underline : "",
            className
        ])} target={target} >
            { children }
        </NextLink>
    )
}