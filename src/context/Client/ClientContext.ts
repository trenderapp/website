import React, { Dispatch, createContext, SetStateAction } from 'react';
import Client, { MeInterface } from 'trender-client';

export const defaultUser: MeInterface.myInformationInterface = {
    avatar: "base1.png",
    locale: "US",
    session_id: "",
    username: "...",
    nickname: "...",
    premium_type: 0,
    flags: 0,
    token: "",
    user_id: "00000000",
    payout_enabled: false
}

export interface ClientContextI {
    client: Client,
    token: string,
    user: MeInterface.myInformationInterface,
    state: "loading" | "loged" | "logout",
    setValue: Dispatch<SetStateAction<ClientContextI>>
}

const ClientContext = createContext<ClientContextI>({
    client: new Client({
        token: ""
    }),
    token: "",
    user: defaultUser,
    state: "loading",
    setValue: () => {}
});

ClientContext.displayName = 'ClientContext';

export default ClientContext;