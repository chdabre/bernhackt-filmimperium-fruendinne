import Vue from 'vue'
import VueI18n from 'vue-i18n'
import defaultMessages from '../lang/de.json'

Vue.use(VueI18n)

const defaultLanguage = 'de'
const loadedLanguages = [defaultLanguage] // our default language that is preloaded

const i18n = new VueI18n({
  locale: defaultLanguage, // set locale
  fallbackLocale: defaultLanguage,
  messages: { [defaultLanguage]: defaultMessages }
})
export default i18n

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
