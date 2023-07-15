"use client"
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { detect } from "detect-browser";
import Image from "next/image";

import { cdnbaseurl } from "@/services/constante";
import { AnimatedIconBox, AnimatedTwoDivBox } from "@/components/animations";
import { useTranslation } from "@/context/Localization";
import { ChangeLanguages } from "@/components/menu";
import { NavbarDiv } from "@/components/navbar";
import { Link } from "@/components";

function HomePage() {

    const { t } = useTranslation();
    const [plateform, setPlateform] = useState<string>("");

    useEffect(() => {

        if (typeof navigator !== "undefined" && typeof window !== "undefined") {
            const browser = detect();

            if (browser) {
                const { os } = browser;

                if (os === "Android OS" || os === "android") {
                    setPlateform("https://play.google.com/store/apps/details?id=com.trenderapp.social")
                } else if (os === "iOS") {
                    setPlateform("https://apps.apple.com/app/trender-social-network/id6443865410")
                }
            }
        }
    }, [])

    return (
        <div className="presentation">
            <header>
                <NavbarDiv>
                <Link disable href="/" >
                    <Image width={103} height={29} src={`${cdnbaseurl}/assets/logos/white.png`} alt="app-logo" />
                </Link>
                </NavbarDiv>
                <NavbarDiv>
                    <Link type="contained" href="/app/statistics/map">
                        World Map
                    </Link>
                    <ChangeLanguages size={32} displayText={false} />

                    { /*token ? <Link type="contained" href="/">Home</Link> : <Link type="contained" href="/login">Login</Link>*/}
                    {plateform && (
                        <div className="connect">
                            <Link href={plateform}>{t("download")}</Link>
                        </div>
                    )
                    }
                </NavbarDiv>
            </header>
            <AnimatedTwoDivBox
                title_1={"Trender, Create the Next Trend and Become a Recognized Creator"}
                text_1={"Trender is a free social network designed to help creators become recognized. You can easily create the next big trend and join a community of like-minded creators."}
                text_2={
                    <>
                        <AnimatedIconBox link={"https://play.google.com/store/apps/details?id=com.trenderapp.social"} text="Android" icon={"play-store"} />
                        <AnimatedIconBox link={"https://apps.apple.com/app/trender-social-network/id6443865410"} text="IOS" icon={"apple-icon"} />
                    </>
                }
            />

            <footer>
                <div className="left">
                    <h3>Application</h3>
                    <Link href={"https://play.google.com/store/apps/details?id=com.trenderapp.social"}>Android</Link>
                    <Link href={"https://apps.apple.com/app/trender-social-network/id6443865410"}>IOS</Link>
                </div>
                <div className="middle">
                    <h3>Informations</h3>
                    <Link href="mailto:support@trenderapp.com">Contact</Link>
                    <Link href="https://doc.trenderapp.com">API</Link>
                    <span>© {dayjs().year()} Trender</span>
                </div>
                <div className="right">
                    <h3>Legals</h3>
                    <Link href="https://cdn.trenderapp.com/assets/legal/en/TOS.pdf">Terms of Sales</Link>
                    <Link href="https://cdn.trenderapp.com/assets/legal/en/T&S.pdf">Terms of Services</Link>
                    <Link href="https://cdn.trenderapp.com/assets/legal/en/T&S.pdf">Legal Mentions</Link>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;