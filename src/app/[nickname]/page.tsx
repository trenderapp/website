import React, { Suspense } from "react"
import { Metadata, ResolvingMetadata } from 'next'
import { Loader } from "@/components";
import { axiosInstance } from "@/services";
import { cdnbaseurl } from "@/services/constante";

type Props = {
    params: { nickname: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const nickname = params.nickname;

    const previousImages = (await parent).openGraph?.images || []

    const request = await axiosInstance(`/seo/users/${nickname}`);
    const response = request.data;

    if (response.data) {
        const data = response.data;
        const avatar = `${cdnbaseurl}/profile_avatars/${data.user_id}/${data.avatar}`;

        return {
            title: data.username,
            description: data?.description ?? `Trender ${nickname} profile.`,
            twitter: {
                title: data.username,
                description: data?.description ?? `Trender ${nickname} profile.`,
                images: [avatar, ...previousImages]
            },
            openGraph: {
                title: data.username,
                description: data?.description ?? `Trender ${nickname} profile.`,
                images: [avatar, ...previousImages],
            },
        }
    } else {
        return {
            title: nickname,
            description: `Impossible to find ${nickname} profile`,
            openGraph: {
                images: [...previousImages],
            },
        }
    }
}

export default async function Page({ params: { nickname }, }: { params: { nickname: string } }) {

    return (
        <Suspense fallback={<Loader />}>
            <Loader />
        </Suspense>
    )
}
