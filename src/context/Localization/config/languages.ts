import { Language } from '../types'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const FR: Language = { locale: 'fr-FR', language: 'Français', code: 'fr' }

export const languages: { [x: string]: Language } = {
  'en-US': EN,
  'fr-FR': FR,
}

const languageList = Object.values(languages)

export default languageList