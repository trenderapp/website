import React from "react";
import NextLink from "next/link";
import TextStyles from "./Text.module.scss";
import { IpropsWithChildren } from "@/interfaces";

type sectionProps = IpropsWithChildren<{
    text?: string;
    href: any;
    className?: string;
    onClick: () => any;
    locale: string;
    underline?: boolean;
    noHover?: boolean;

}>

function CreateLink({ children, text, href, className, onClick, locale, underline, noHover }: sectionProps) {
    return (
        <NextLink passHref locale={locale} href={href}>
            <a onClick={onClick} className={`${underline ? TextStyles.underline : ""} ${noHover ? TextStyles.no_hover : ""} ${className ? className : ""}`}>
                { text ?? children }
            </a>
        </NextLink>
    )
}

export default CreateLink;