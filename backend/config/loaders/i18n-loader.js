module.exports = (source) => {
  if (this.cacheable) this.cacheable();

  const lang = process.env.APP_LANGUAGE;
  const i18n = typeof source === "string" ? JSON.parse(source) : source;

  const value = i18n[lang];

  const string = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `module.exports = ${string}`;
};
