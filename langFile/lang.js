export const getTranslation = (langPack = {}, key) => {
  const [packKey, wordKey] = key.split("_");
  // if (!mainKey[lang]) {
  //   console.warn(`Language "${lang}" not found, using default (en)`);
  //   lang = "en"; // 預設 fallback 為英文
  // }

  return `${langPack[`${!packKey ? "_" : packKey}`]?.[wordKey] ?? ""}`;
};
