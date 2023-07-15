"use client"
import { useRef, useState } from "react";
import { useTranslation } from "@/context/Localization";
import { Button, Form, Input } from "@/components";
import { useRouter } from "next/navigation";
import useClient from "@/context/Client/useClient";
import { detect } from "detect-browser";
import { axiosInstance } from "@/services";
import { apibaseurl } from "@/services/constante";
import Client from "trender-client";
import SvgElement from "@/components/svg";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import CaptchaBlock from "@/components/login/CaptchaBlock";
import { setStorage } from "@/services/storage";

function LoginPage() {

    const router = useRouter();
    const { t } = useTranslation();

    const client = useClient();
    const [users, setUsers] = useState({ 
        email: '',
        password: ''
    });

    const [captcha, setCaptcha] = useState("");
    const captchaRef = useRef<HCaptcha>();
    const [response, setResponse] = useState({
        is_error: false,
        content: ""
    });
    const [showPass, setShowPass] = useState(false);
    const [waiting, setWaiting] = useState(true);

    const changePassShow = () => {
        setShowPass(!showPass)
      }
      
    const handleSubmit = async () => {

        if(!captcha) return setResponse({ is_error: true, content: t(`human_verif`) })
 
        if(!users.email || !users.password) return setResponse({ is_error: true, content: t(`verify_fields`) })

        if(typeof navigator !== "undefined" && typeof window !== "undefined") {
            const browser = detect();
            
            let friendly_name;
            if (browser) {
                let { name } = browser;
                const { os } = browser;
                let isiPad;
                if (os) {
                    friendly_name = `${os} - Trender Desktop`;
                } else {
                    if (name === "ios") {
                        name = "safari";
                    } else if (name === "fxios") {
                        name = "firefox";
                    } else if (name === "crios") {
                        name = "chrome";
                    }
                    if (os === "Mac OS" && navigator.maxTouchPoints > 0)
                        isiPad = true;
                    friendly_name = `${name} ${isiPad ? "iPadOS" : os} - Trender Desktop`;
                }
            } else {
                friendly_name = "Unknown Device - Trender Desktop";
            }

            setWaiting(true);
    
            const request = await axiosInstance.post("/login", {
                email: users.email.toLowerCase(),
                password: users.password,
                device_name: friendly_name,
                captcha_code: captcha
            });
            const response = request.data;
            
            setWaiting(false)
            
            if(captchaRef.current) captchaRef.current.resetCaptcha();
            
            if(response.error){
                return setResponse({ is_error: true, content: t(`${response.error.code}`) })
    
            } else {
    
                setStorage("user_info", JSON.stringify(response.data))
                
                const new_client = new Client({
                    token: response.data.token,
                    apiurl: apibaseurl
                })
                const informations = await new_client.informations();

                if(informations.data) {
                    client.setValue({ ...client, client: new_client, token: response.token, user: informations.data, state: "loged" })
                    setTimeout(() => {
                        router.replace("/home")
                    }, 500);
                }
            }
        }
    };

    const onChange = (e: HTMLInputElement) => setUsers({ ...users, [e.name]: e.value });

    return (
        <Form error={response} title={t("already_account")}>
            <Input
                value={users.email}
                type="text"
                name="email"
                autoComplete="current-password"
                label={t("email")}
                onChangeText={(e) => onChange(e.target)}
            />
            <Input
                value={users.password}
                type={!showPass ? "password" : "text"}
                name="password"
                autoComplete="current-password"
                label={t("password")}
                right={showPass ? <SvgElement name="eye" size={20} onClick={() => changePassShow()} /> : <SvgElement name="eye-close" size={20} onClick={() => changePassShow()} />}
                onChangeText={(e) => onChange(e.target)}
            />
            <CaptchaBlock reference={captchaRef} onSuccess={(t) => setCaptcha(t)} />
            <Button loading={waiting} onPress={() => handleSubmit()}>
                { t("connect") }
            </Button>
        </Form>
    )
}

export default LoginPage;