import { createContext, useCallback, useEffect, useState } from 'react'
import memoize from 'lodash/memoize'
import { EN, languages } from './config/languages'
import { ContextApi, ProviderState, TranslateFunction, Language } from './types'
import { LS_KEY, fetchLocale, getLanguageCodeFromLS } from './helpers'
import translations from './config/translations.json'

// Export the translations directly

const initialState: ProviderState = {
  isFetching: true,
  currentLanguage: EN,
}

const includesVariableRegex = new RegExp(/{{\S+?}}/, 'gm')

const translatedTextIncludesVariable = memoize((translatedText) => {
  return !!translatedText?.match(includesVariableRegex)
})

// Export the translations directly
export const languageMap = new Map<Language['locale'], Record<string, string>>()
languageMap.set(EN.locale, translations)

export const LanguageContext = createContext<ContextApi | undefined>(undefined)

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getLanguageCodeFromLS()

    return {
      ...initialState,
      currentLanguage: languages[codeFromStorage] || EN,
    }
  })
  const { currentLanguage } = state;

  useEffect(() => {
    const fetchInitialLocales = async () => {
      const codeFromStorage = getLanguageCodeFromLS()

      if (codeFromStorage !== EN.locale) {
        const enLocale = languageMap.get(EN.locale)
        const currentLocale = await fetchLocale(codeFromStorage)
        if (currentLocale) {
          languageMap.set(codeFromStorage, { ...enLocale, ...currentLocale })
        }
      }

      setState((prevState) => ({
        ...prevState,
        isFetching: false,
      }))
    }

    fetchInitialLocales()
  }, [setState])

  const setLanguage = useCallback(async (language: Language) => {
    if (!languageMap.has(language.locale)) {
      setState((prevState) => ({
        ...prevState,
        isFetching: true,
      }))

      const locale = await fetchLocale(language.locale)
      if (locale) {
        languageMap.set(language.locale, locale)
        localStorage?.setItem(LS_KEY, language.locale)
        setState((prevState) => ({
          ...prevState,
          isFetching: false,
          currentLanguage: language,
        }))
      } else {
        setState((prevState) => ({
          ...prevState,
          isFetching: false,
        }))
      }
    } else {
      localStorage?.setItem(LS_KEY, language.locale)
      setState((prevState) => ({
        ...prevState,
        isFetching: false,
        currentLanguage: language,
      }))
    }
  }, [])

  const translate: TranslateFunction = useCallback(
    (key, data) => {
      const translationSet = languageMap.get(currentLanguage.locale) ?? languageMap.get(EN.locale)
      const translatedText = translationSet?.[key] || key

      // Check the existence of at least one combination of %%, separated by 1 or more non space characters
      const includesVariable = translatedTextIncludesVariable(translatedText)

      if (includesVariable && data) {
        let interpolatedText = translatedText
        Object.keys(data).forEach((dataKey) => {
          const templateKey = new RegExp(`{{${dataKey}}}`, 'g')
          interpolatedText = interpolatedText.replace(templateKey, data[dataKey].toString())
        })

        return interpolatedText
      }

      return translatedText
    },
    [currentLanguage],
  )

  return <LanguageContext.Provider value={{ ...state, setLanguage, t: translate }}>{children}</LanguageContext.Provider>
}