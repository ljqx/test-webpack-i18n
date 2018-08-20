import globalLocale from './locale';

export default class I18nModel {
  constructor({
    loadTranslationData,
  }) {
    this.translation = loadTranslationData(globalLocale);
  }

  translate(text) {
    return this.translation[text];
  }
}