import Provider from '@/context'
import { cdnbaseurl } from '@/services/constante';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import "@/styles/error.scss";
import "@/styles/style.scss";
import "@/styles/loader.scss";
import "@/styles/alert.scss";
import "@/styles/presentation.scss";
import "@/styles/global.scss";
import "@/styles/variables.scss";

const meta_description = "Trender is a free social network designed to help creators become recognized. You can easily create the next big trend and join a community of like-minded creators. Our premium subscriptions offer features like automatic posting to Twitch and YouTube, photo NFTs through crypto wallet connection (WEB3), advanced post analytics, and a reputation system. Our platform also includes AI-powered security, enhanced moderation, creator monetization, and copyright protection.";
const meta_title = `Trender - Create the Next Trend and Become a Recognized Creator`;
const meta_image = `${cdnbaseurl}/assets/icons/circles/chatzone_255.png`;
const meta_url = "https://www.trenderapp.com";
const keywords = "Trender, trenderapp, social media, trenderapp.com, trender.com, social network, trend, creator, free, premium subscription, Twitch, YouTube, NFT, crypto, WEB3, AI, security, moderation, analytics, monetization, copyright protection, data proctection, friendly";
const current_year = new Date().getFullYear();

export const metadata: Metadata = {
  title: meta_title,
  description: meta_description,
  icons: meta_image,
  keywords: keywords,
  other: {
    bingbot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    robots: "index, follow, noyaca",
    "dc.Title": meta_title,
    "dc.creator": "Trender Inc.",
    "dc.description": meta_description,
    "dc.identifier": meta_url,
    "dc.relation": meta_url,
    "dc.source": meta_url,
    "dc.Coverage": current_year,
    "dc.Rights": `Copyright ${current_year}, Trender Inc.`,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  appleWebApp: {
    capable: true
  },
  authors: {
    name: "Trender Inc."
  },
  referrer: "origin",
  robots: {
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  openGraph: {
    type: "website",
    url: meta_url,
    description: meta_description,
    images: [{
      url: meta_image
    }],
    siteName: "Trender",
    title: meta_title,
    alternateLocale: "fr",
    locale: "en"
  },
  twitter: {
    card: "summary_large_image",
    creator: "Trender",
    description: meta_description,
    images: [{
      url: meta_image
    }],
    site: meta_url,
    title: meta_title
  }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
