import Loader from "../loader";
import styles from "./button.module.scss";
import { classNames } from "@/services";

type sectionProps = React.PropsWithChildren<{
    onPress?: () => any;
    type?: "text" | "contained" | "outlined";
    disable?: boolean;
    uppercase?: boolean;
    loading?: boolean;
}>

export default function Button({ children, onPress, type = "contained", disable = false, uppercase = false, loading = false }: sectionProps) {
    return (
        <button onClick={onPress} disabled={disable} className={classNames([
            styles.global,
            styles[uppercase ? "uppercase" : ""],
            styles[onPress && !disable ? "pointer" : ""],
            styles[type === "contained" ? "contained" : type === "outlined" ? "outlined" : ""]
        ])}>{loading && <Loader />} {children}</button>
    )
}