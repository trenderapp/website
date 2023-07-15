import React, { Suspense } from "react"
import { Metadata, ResolvingMetadata } from 'next'
import { Loader } from "@/components";
import { axiosInstance } from "@/services";

type Props = {
    params: { post_id: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const post_id = params.post_id;

    const previousImages = (await parent).openGraph?.images || []

    const request = await axiosInstance(`/seo/posts/${post_id}`);
    const response = request.data;

    if (response.data) {
        const data = response.data;
        const title = `Trend from ${data.from.username}`
        const image = data?.image ?? "";
        const description = data.content;

        return {
            title: title,
            description: description,
            twitter: {
                title: title,
                description: description,
                images: [image, ...previousImages]
            },
            openGraph: {
                title: title,
                description: description,
                images: [image, ...previousImages],
            },
        }
    } else {
        return {
            title: post_id,
            description: `Impossible to find ${post_id} Trend`,
            openGraph: {
                images: [...previousImages],
            },
        }
    }
}

export default async function Page({ params: { post_id }, }: { params: { post_id: string } }) {

    return (
        <Suspense fallback={<Loader />}>
            <Loader />
        </Suspense>
    )
}
