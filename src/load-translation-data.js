import { fromPairs } from 'lodash';

export default function loadTranslationData(locale1, keys) {
  const locale = process.env.LOCALE;
  return fromPairs(keys.map(key => [key, require(`raw-loader!./translation/${key}/${process.env.LOCALE}`)]));
}