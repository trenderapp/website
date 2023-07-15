"use client"
import { PropsWithChildren } from "react";
import ThemeProvider from "./Theme/ThemeProvider";
import { LanguageProvider } from "./Localization";
import ClientProvider from "./Client/ClientProvider";
import WebsocketProvider from "./WebSocket/WebsocketProvider";
import MaterialThemeProvider from "./MaterialTheme";

export default function Provider({ children }: PropsWithChildren) {

    return (
        <ThemeProvider>
            <MaterialThemeProvider>
                <LanguageProvider>
                    <ClientProvider>
                        <WebsocketProvider>
                            {children}
                        </WebsocketProvider>
                    </ClientProvider>
                </LanguageProvider>
            </MaterialThemeProvider>
        </ThemeProvider>
    )
}