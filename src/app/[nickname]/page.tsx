import React, { Suspense } from "react"
import { Metadata, ResolvingMetadata } from 'next';
import { axiosInstance, userAvatar } from "@/services";
import ProfileComponent, { IProfileComponent } from "@/views/Profile/ProfileComponent";
import { Loader } from "@/components";

type Props = {
    params: { nickname: string }
}

async function fetchUser(nickname: string): Promise<IProfileComponent> {
    const request = await axiosInstance(`/seo/users/${nickname}`);
    return request.data;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const nickname = params.nickname;

    const previousImages = (await parent).openGraph?.images || []

    const response = await fetchUser(nickname);

    if (response.data) {
        const data = response.data;
        const avatar = userAvatar(data.user_id, data.avatar);

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

    const user = await fetchUser(nickname);

    return (
        <Suspense fallback={<Loader />}>
            <ProfileComponent data={user} />
        </Suspense>
    )
}