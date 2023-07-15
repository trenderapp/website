import type { PropsWithChildren } from "react";
import styles from "../container.module.scss";
import { classNames } from "@/services";
import Link from "@/components/link";
import Image from "next/image";
import { cdnbaseurl } from "@/services/constante";

export default function AppStatisticsContainer({ children }: PropsWithChildren) {
    
    return (
        <section className={classNames([styles.container])}>
            <header>
                <Link disable href="/" >
                    <Image width={103} height={29} src={`${cdnbaseurl}/assets/logos/white.png`} alt="app-logo" />
                </Link>
            </header>
            <div className={classNames([styles.content])}>
                { children }
            </div>
        </section>
    )
}