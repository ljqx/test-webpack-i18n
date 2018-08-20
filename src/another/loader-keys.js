import { fromPairs } from 'lodash';
import I18nModel from '../i18n-model';

const keys = [
  'test key',
];

const context = require.context(`../translation/${process.env.LOCALE}`, false, /^\.\/((test key))$/);

export default new I18nModel({
  loadTranslationData: (locale) => fromPairs(keys.map(key => [key, context(`./${key}`)]))
});
