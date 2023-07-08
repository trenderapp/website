import { useState, useEffect } from 'react';
import Client from 'trender-client';
import ClientContext, { ClientContextI, defaultUser } from './ClientContext';
import useTheme from '../Theme/useTheme';
import { apibaseurl, cdnbaseurl } from '@/services/constante';
import { clearStorage, getStorageInfo, storageI } from '@/services/storage';

function ClientProvider({ children }: React.PropsWithChildren) {

    const [value, setValue] = useState<ClientContextI>({
        client: new Client({
            token: ""
        }),
        token: "",
        user: defaultUser,
        state: "loading",
        setValue: () => {}
    });

    const { setTheme } = useTheme();

    async function splash() {
        const { settings, user_info } = getStorageInfo("all") as storageI;

        if (settings) {
            if (settings) setTheme(settings);
        }

        if (!user_info) return setValue({ ...value, state: "logout" });

        const user_token = user_info?.token;

        if (!user_token) return setValue({ ...value, state: "logout" });

        const client = new Client({
            token: user_token,
            apiurl: apibaseurl,
            cdnurl: cdnbaseurl
        });

        const user = await client.informations();

        if(user.data) return setValue({
                ...value,
                client: client,
                token: user_token,
                user: user.data,
                state: "loged"
            });

        clearStorage("user_info");
        return setValue({
            ...value,
            state: "logout"
        });
    }

    useEffect(() => {
        splash()
    }, [])

    return (
        <ClientContext.Provider value={{ ...value, setValue }}>
            {children}
        </ClientContext.Provider>
    );
}

export default ClientProvider;