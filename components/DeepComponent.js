import React, { useContext } from "react";
import { useLanguage } from "../context/LanguageContext";

function DeepComponent() {
  const { locale, t } = useLanguage();

  return (
    <div>
      <div>
        {locale}
        {t("us")}
        <h1>{t("homePage_apierror")}</h1>
        <p>{t("hello")}</p>
      </div>
    </div>
  );
}

export default DeepComponent;
