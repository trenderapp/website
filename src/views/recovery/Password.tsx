"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation"
import { Button, Form, Input } from "@/components";
import { useTranslation } from "@/context/Localization";
import { axiosInstance } from "@/services";
import { email_regex } from "@/services/regex";

function RecoveryPasswordHome() {

    const [email, setEmail] = useState<string>("");
    const [response, setResponse] = useState({
        is_error: false,
        content: ""
    });

    const history = useRouter();
    const { t } = useTranslation();

    const sendCode = async () => {
        
        if(!email_regex.test(email)) return setResponse({ is_error: true, content: t(`verify_fields`) });
        
        const request = await axiosInstance.post(`/users/me/recovery?type=password&query=${email}`);
        const response = request.data;

        if(!response?.data?.code) return setResponse({ is_error: true, content: t(`${response.error.code}`)})
        
        history.push(`/register/next?email=${email}`, `/password/verification?email=${email}`)
    }

    return (
        <Form error={response} title="Recover your password">
            <Input type="email" value={email} onChangeText={(e) => e ? setEmail(e.target.value) : undefined} label="Email :" autoComplete="email" />
            <Button onPress={() => sendCode()}>Send recovery link</Button>
        </Form>
    )
}

export default RecoveryPasswordHome;