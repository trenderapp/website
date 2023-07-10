import React, { ChangeEventHandler, HTMLInputTypeAttribute, PropsWithChildren } from "react";
import styles from "./input.module.scss";
import { classNames } from "@/services";

type sectionProps = PropsWithChildren<{
    mode?: 'flat' | 'outlined';
    left?: React.ReactNode;
    right?: React.ReactNode;
    disabled?: boolean;
    editable?: boolean;
    label: string;
    placeholder?: string;
    error?: boolean;
    onChangeText?: ChangeEventHandler<HTMLInputElement>;
    textColor?: string;
    multiline?: boolean;
    numberOfLines?: number;
    value?: string;
    autoComplete?: string;
    name?: string;
    type: HTMLInputTypeAttribute
  }>

function Input({
    mode = 'flat',
    disabled = false,
    error: errorProp = false,
    multiline = false,
    editable = true,
    label,
    placeholder = "",
    error = false,
    onChangeText,
    textColor,
    numberOfLines,
    value = "",
    autoComplete,
    name,
    type
  }: sectionProps) {

    return (
        <div className={classNames([
            styles.input
        ])}>
            <label>{label}</label>
            <input type={type} name={name} autoComplete={autoComplete} value={value} id={name} onChange={(e) => onChangeText ? onChangeText(e) : {}} />
            </div>
    )
}

export default Input;