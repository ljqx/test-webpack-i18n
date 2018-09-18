import { fromPairs } from 'lodash';
import I18nModel from '../i18n-model';

const keys = [
  'test key',
  'test key 2'
];

const context = __non_webpack_require__.context(`../translation/${process.env.LOCALE}`, false, /^\.\/((test key)|(test key 2))$/);

export default new I18nModel({
  loadTranslationData: (locale) => fromPairs(keys.map(key => [key, context(`./${key}`)]))
});

define(['i18n-loader!./keys.json'])