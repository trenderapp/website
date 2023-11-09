import { useEffect, useState } from "react";
import { detect } from "detect-browser";
import Image from "next/image";

import { Link } from "@/components";
import { ChangeLanguages } from "@/components/menu";
import { NavbarDiv } from "@/components/navbar";
import { cdnbaseurl } from "@/services/constante";

export default function HomeHeader() {

    
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
    )
}