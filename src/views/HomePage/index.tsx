"use client"
import React from "react";
import { AnimatedBoxImage, AnimatedIconBox, AnimatedTextTitleBox } from "@/components/animations";
import style from "@/styles/presentation.module.scss"
import { useTranslation } from "@/context/Localization";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

function HomePage() {

    const { t } = useTranslation();

    return (
        <div className={style.presentation}>
            <HomeHeader />
            <div className={style.hero}>
                <AnimatedTextTitleBox
                    title={t("home_title")}
                    text={t("home_description")}
                    button={
                        <>
                            <AnimatedIconBox link={"https://play.google.com/store/apps/details?id=com.trenderapp.social"} text="Android" icon={"play-store"} />
                            <AnimatedIconBox link={"https://apps.apple.com/app/trender-social-network/id6443865410"} text="IOS" icon={"apple-icon"} />
                        </>}

                />
            </div>
            <div className={style.hero}>
                <AnimatedBoxImage
                    image={{
                        alt: "create image presentation",
                        src: "/assets/images/home/create.png"
                    }}
                    title={t("home_create_title")}
                    text={t("home_create_description")}
                />
            </div>
            <div className={style.hero}>
                <AnimatedBoxImage
                    reverse
                    image={{
                        alt: "explore image presentation",
                        src: "/assets/images/home/explore.png"
                    }}
                    title={t("home_explore_title")}
                    text={t("home_explore_description")}
                />
            </div>
            <div className={style.hero}>
                <AnimatedBoxImage
                    image={{
                        alt: "search image presentation",
                        src: "/assets/images/home/search.png"
                    }}
                    title={t("home_search_title")}
                    text={t("home_search_description")}
                />
            </div>
            <div className={style.hero}>
                <AnimatedBoxImage
                    reverse
                    image={{
                        alt: "chat image presentation",
                        src: "/assets/images/home/chat.png"
                    }}
                    title={t("home_chat_title")}
                    text={t("home_chat_description")}
                />
            </div>
            <HomeFooter />
        </div>
    )
}

export default HomePage;