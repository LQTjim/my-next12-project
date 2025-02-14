import en from "./en";
import zhCN from "./zh-CN";
import homePageEn from "./homePage/en";
import homePageZhCN from "./homePage/zh-CN";

export const translationsBase = {
  _en: en,
  homePage_en: homePageEn,
  "_zh-CN": zhCN,
  "homePage_zh-CN": homePageZhCN,
};

export const pickLangPack = (packname = "", lang) => {
  let langPack = {};
  const langPackFromTranslationsBase = translationsBase[`${packname}_${lang}`];
  if (langPackFromTranslationsBase) {
    langPack = langPackFromTranslationsBase;
  }
  return langPack;
};

export const concatPickLangPack = (lang, packnames) => {
  let result = { [`_`]: translationsBase[`_${lang}`] };
  if (typeof packnames === "string") {
    result[`${packnames}_${lang}`] = translationsBase[`${packnames}_${lang}`];
  }
  if (Array.isArray(packnames)) {
    packnames.map(
      (pn) => (result[`${pn}`] = translationsBase[`${pn}_${lang}`])
    );
  }
  return result;
};
