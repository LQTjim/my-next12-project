const languages = {
  en: require("./en").default,
  "zh-CN": require("./zh-CN").default,
};

export const getTranslation = (lang, key) => {
  if (!languages[lang]) {
    console.warn(`Language "${lang}" not found, using default (en)`);
    lang = "en"; // 預設 fallback 為英文
  }

  return languages[lang][key] || ``;
};
