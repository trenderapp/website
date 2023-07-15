import { cdnbaseurl } from '@/services/constante';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import AppStatisticsContainer from '@/components/container/Statistics';

const meta_description = "Statistics for Trender";
const meta_title = `Trender - Statistics`;
const meta_image = `${cdnbaseurl}/assets/icons/circles/chatzone_255.png`;
const meta_url = "https://www.trenderapp.com/app/statistics";
const keywords = "Trender, trenderapp, social media, statistics, trenderapp.com, trender.com, social network, trend, creator, free, premium subscription, Twitch, YouTube, NFT, crypto, WEB3, AI, security, moderation, analytics, monetization, copyright protection, data proctection, friendly";

export const metadata: Metadata = {
  title: meta_title,
  description: meta_description,
  icons: meta_image,
  keywords: keywords,
  openGraph: {
    type: "website",
    url: meta_url,
    description: meta_description,
  },
  twitter: {
    creator: "Trender",
    description: meta_description,
    site: meta_url,
    title: meta_title
  }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <AppStatisticsContainer>
        {children}
    </AppStatisticsContainer>
  )
}
