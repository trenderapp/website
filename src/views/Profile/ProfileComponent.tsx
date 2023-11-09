"use client"

import { Link } from "@/components";
import { AnimatedIconBox, AnimatedTwoDivBox } from "@/components/animations";
import { ChangeLanguages } from "@/components/menu";
import { NavbarDiv } from "@/components/navbar";
import { useTranslation } from "@/context/Localization";
import { cdnbaseurl } from "@/services/constante";
import Image from "next/image";
import { GlobalInterface, UserInterface } from "trender-client";
import HomeFooter from "@/views/HomePage/HomeFooter";
import HomeHeader from "@/views/HomePage/HomeHeader";
import { userAvatar } from "@/services";

export interface IProfileComponent {
    data?: UserInterface.userInfo;
    error?: GlobalInterface.error;
}

export default async function ProfileComponent({ data }: { data: IProfileComponent }) {

    const { t } = useTranslation();

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
            </NavbarDiv>
        </header>
        <AnimatedTwoDivBox
            image={{
                alt: "profile_avatar",
                src: data.data ? userAvatar(data.data.user_id, data.data.avatar) : "/assets/12promax.png"
            }}
            title_1={data.data ? t("invite_link", {
                username: data.data.username
            }) : t("home_title")}
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
