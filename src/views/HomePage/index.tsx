"use client"
import React from "react";
import { AnimatedIconBox, AnimatedTwoDivBox } from "@/components/animations";
import { useTranslation } from "@/context/Localization";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

function HomePage() {

    const { t } = useTranslation();

    return (
        <div className="presentation">
            <HomeHeader />
            <AnimatedTwoDivBox
                title_1={t("home_title")}
                text_1={t("home_description")}
                text_2={
                    <>
                        <AnimatedIconBox link={"https://play.google.com/store/apps/details?id=com.trenderapp.social"} text="Android" icon={"play-store"} />
                        <AnimatedIconBox link={"https://apps.apple.com/app/trender-social-network/id6443865410"} text="IOS" icon={"apple-icon"} />
                    </>
                }
            />
            <HomeFooter />
        </div>
    )
}

export default HomePage;