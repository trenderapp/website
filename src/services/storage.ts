import { availableAppTheme } from "@/context/Theme/ThemeContext";

export type settingsStorageI = availableAppTheme;

export interface userStorageI {
    user_id: string;
    session_id: string;
    nickname?: string;
    username?: string;
    avatar?: string;
    token?: string;
    fcm_token?: string;
    locale?: string;
    nsfw_filter?: boolean;
}

export interface storageI {
    user_info?: userStorageI,
    settings?: settingsStorageI 
}

type localeStorageKeysT = 'user_info' | 'settings';

const getAllStorage = () => {
    let to_return: storageI = {};

    const user_info_storage = localStorage.getItem("user_info");
    const settings_storage = localStorage.getItem("settings");

    if(user_info_storage) to_return.user_info = JSON.parse(user_info_storage);
    if(settings_storage) to_return.settings = JSON.parse(settings_storage);

    return to_return;
}

export const clearStorage = (key: localeStorageKeysT | 'all') => {
    if(key === "all") return localStorage.clear();
    return localStorage.removeItem(key)
}

export const getStorageInfo = (key: localeStorageKeysT | 'all'): userStorageI | settingsStorageI | storageI | undefined => {
    if(key === "all") return getAllStorage();
    const storage = localStorage.getItem(key);
    if(!storage) return undefined;
    return JSON.parse(storage)
}

export const setStorage = (key: localeStorageKeysT, value: string) => {
    return localStorage.setItem(key, value)
}