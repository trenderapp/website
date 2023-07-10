"use client"
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { detect } from "detect-browser";

import { cdnbaseurl } from "@/services/constante";
import { AnimatedIconBox, AnimatedTwoDivBox } from "@/components/animations";
import { useTranslation } from "@/context/Localization";
import { ChangeLanguages } from "@/components/menu";
import { NavbarDiv } from "@/components/navbar";
import { Link } from "@/components";
import useClient from "@/context/Client/useClient";

function HomePage() {

    const { t } = useTranslation();
    const { token } = useClient();
    const [plateform, setPlateform] = useState<string>("");

    useEffect(() => {
        
        if(typeof navigator !== "undefined" && typeof window !== "undefined") {
            const browser = detect();

            if (browser) {
                const { os } = browser;
                
                if(os === "Android OS" || os === "android") {
                    setPlateform("https://play.google.com/store/apps/details?id=com.trenderapp.social")
                } else if(os === "iOS") {
                    setPlateform("https://apps.apple.com/app/trender-social-network/id6443865410")
                }
            }
        }
    }, [])

    return (
        <div className="presentation">
            <header>
                <Link disable href="/" >
                    <img src={`${cdnbaseurl}/assets/logos/white.png`} alt="app-logo" />
                </Link>
                <NavbarDiv>
                    <ChangeLanguages size={32} displayText={false} />
                    
                    { token ? <Link type="contained" href="/">Home</Link> : <Link type="contained" href="/">Login</Link> }
                    {  plateform && (
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
            {
                /*
            <AnimatedBoxImage reverse title={t("create_your_own_trender_title")} text={t("create_your_own_trender_description")} image={{
                src: `${cdnbaseurl}/assets/backgrounds/placeholder_eric.png`,
                alt: "juste un truc qui doit etre la"
            }} />
            <AnimatedBoxImage title={t("connect_to_the_blockchain_title")} text={t("connect_to_the_blockchain_description")} image={{
                src: `${cdnbaseurl}/assets/backgrounds/placeholder_eric.png`,
                alt: "juste un truc qui doit etre la"
            }} />
            <AnimatedBoxImage reverse title={t("use_it_everywhere_title")} text={t("use_it_everywhere_description")} image={{
                src: `${cdnbaseurl}/assets/backgrounds/placeholder_eric.png`,
                alt: "juste un truc qui doit etre la"
            }} />*/
            }

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