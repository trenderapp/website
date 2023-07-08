import { Language } from '../types'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const FR: Language = { locale: 'fr-FR', language: 'Français', code: 'fr' }

export const languages = {
  'en-US': EN,
  'fr-FR': FR,
}

const languageList = Object.values(languages)

export default languageList