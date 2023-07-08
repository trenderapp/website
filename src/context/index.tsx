"use client"
import { PropsWithChildren } from "react";
import ThemeProvider from "./Theme/ThemeProvider";
import { LanguageProvider } from "./Localization";
import ClientProvider from "./Client/ClientProvider";
import WebsocketProvider from "./WebSocket/WebsocketProvider";

export default function Provider({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <ClientProvider>
                    <WebsocketProvider>
                        { children }
                    </WebsocketProvider>
                </ClientProvider>
            </LanguageProvider>
        </ThemeProvider>
    )
}