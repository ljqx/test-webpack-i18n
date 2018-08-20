import { fromPairs } from 'lodash';
import I18nModel from '../i18n-model';

function loadTranslationDataForTestKey(locale) {
  return fromPairs(['test key', require(`raw-loader!../translation/${locale}/test key`)])
}

const enI18n = new I18nModel({
  loadTranslationData: (locale) => loadTranslationDataForTestKey('en'),
});

const frI18n = new I18nModel({
  loadTranslationData: (locale) => loadTranslationDataForTestKey('fr'),
});

console.log(enI18n);
console.log(enI18n.translate('test key'));

console.log(frI18n);
console.log(frI18n.translate('test key'));