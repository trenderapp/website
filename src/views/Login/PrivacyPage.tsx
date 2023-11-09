"use client"
import { Form, Link } from "@/components";
import { useTranslation } from "@/context/Localization";
import { useState } from "react";

function PrivacyPage() {
    const { t } = useTranslation();
    const [links] = useState([
        {
            text: "Terms of use",
            link: "https://cdn.trenderapp.com/assets/legal/en/T&S.pdf"
        },
        {
            text: "Conditions d'utilisation",
            link: "https://cdn.trenderapp.com/assets/legal/fr/CGU.pdf"
        }
    ])

    return (
        <Form title={t("terms_of_use")}>
            {
                links.map((l, idx) => (
                    <Link key={idx} type="contained" href={l.link}>
                        {l.text}
                    </Link>

                ))
            }
            <Link type="text" underline href="/">
                {t("home")}
            </Link>
        </Form>
    )
}

export default PrivacyPage;