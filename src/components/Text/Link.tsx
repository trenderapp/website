import React from "react";
import NextLink from "next/link";
import TextStyles from "./Text.module.scss";

type sectionProps = React.PropsWithChildren<{
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
        <NextLink onClick={onClick} className={`${underline ? TextStyles.underline : ""} ${noHover ? TextStyles.no_hover : ""} ${className ? className : ""}`} passHref locale={locale} href={href}>
            { text ?? children }
        </NextLink>
    )
}

export default CreateLink;