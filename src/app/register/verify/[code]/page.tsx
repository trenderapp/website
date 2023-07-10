import React, { Suspense } from "react"
import RegisterVerifyHome from "@/views/recovery/CheckCode";
import { axiosInstance } from "@/services";

async function verifyCode(code: string) {

    const request = await axiosInstance.post(`/users/me/verify/email?code=${code}`);
    const response = request.data;

    return response;
}

export default async function Page({ params: { code }, }: { params: { code: string }}) {
    
    const info = verifyCode(code);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DisplayResponse response={info} />
        </Suspense>
    )
}


async function DisplayResponse({ response }: { response: Promise<object> }) {

    const info = await response

    return (
        <RegisterVerifyHome response={info} />
    )
}