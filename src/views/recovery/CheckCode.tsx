"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Form, Link } from "@/components";
import { useTranslation } from "@/context/Localization";

function RegisterVerifyHome({ response }: { response: any }) {
    
    const history = useRouter();
    const { t } = useTranslation();

    setTimeout(() => {
        history.push(response?.data?.success ? "/login" : "/register")
    }, 15000)

    return (
        <Form title={t(response?.data?.success ? "email_verified" : `${response?.error?.code}`)}>
            <Link underline href={response?.data?.success ? "/login" : "/register"}>
                {t("redirect_secondes", {
                    time: 15
                })}
            </Link>
        </Form>
    )
}

export default RegisterVerifyHome;