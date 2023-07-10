"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation"

import Svg from "@/components/svg";
import { axiosInstance } from "@/services";
import { Button, Form, Input } from "@/components";
import { useTranslation } from "@/context/Localization";

function NewPasswordHome({ code }: { code: string }) {

    const [showPass, setShowPass] = useState(false);
    const [response, setResponse] = useState({
        is_error: false,
        content: ""
    });
    const [users, setUsers] = useState({
        password: "",
        password2: ""
    });
    const [waiting, setWaiting] = useState(false);

    const history = useRouter();
    const { t } = useTranslation();

    const changePassShow = () => {
        setShowPass(!showPass)
    }

    const sendCode = async () => {        
        if (waiting) return setResponse({ is_error: true, content: t(`sending_form`) });
        if (users.password !== users.password2) return setResponse({ is_error: true, content: t(`different_password`) });
        if (users.password.length < 8) return setResponse({ is_error: true, content: t(`password_security`) });

        setWaiting(true);

        const request = await axiosInstance.post(`/users/me/recovery/password?code=${code}`, {
            password: users.password,
            password2: users.password2
        })
        const response = request.data;

        setWaiting(false);

        if (!response?.data?.success) return setResponse({ is_error: true, content: t(`${response.error.code}`) })

        history.push(response?.data?.success && "/login")
    }

    const onChange = (e: EventTarget & HTMLInputElement) => {
        setUsers({ ...users, [e.name]: e.value });
    };

    return (
        <Form error={response} title="Set your new password">
            <Input
                value={users.password}
                type={!showPass ? "password" : "text"}
                name="password"
                autoComplete="current-password"
                label="New password"
                right={showPass ? <Svg name="eye" size={20} onClick={() => changePassShow()} /> : <Svg name="eye-close" size={20} onClick={changePassShow} />}
                onChangeText={(e) => onChange(e.target)}
            />
            <Input
                value={users.password2}
                type={!showPass ? "password" : "text"}
                name="password2"
                autoComplete="current-password"
                label="Repeat the password"
                right={showPass ? <Svg name="eye" size={20} onClick={() => changePassShow()} /> : <Svg name="eye-close" size={20} onClick={changePassShow} />}
                onChangeText={(e) => onChange(e.target)}
            />
            <Button onPress={() => sendCode()}>
                Change the password
            </Button>
        </Form>
    )
}

export default NewPasswordHome;