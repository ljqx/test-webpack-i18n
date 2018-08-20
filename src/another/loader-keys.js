import loadTranslationData from '../load-translation-data';
import I18nModel from '../i18n-model';

export default new I18nModel({
  loadTranslationData: (locale) => loadTranslationData(locale, ['test key']),
});
