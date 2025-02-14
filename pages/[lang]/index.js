import React, { Component } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import DeepComponent from "../../components/DeepComponent";
import DeepClassComponent from "../../components/DeepClassComponent";

const translations = {
  en: { welcome: "Welcome to my site!" },
  "zh-CN": { welcome: "歡迎來到我的網站！" },
};
export async function getStaticPaths() {
  const locales = ["en", "zh-CN"]; // 定義語系
  const paths = locales.map((lang) => ({ params: { lang } }));

  return {
    paths,
    fallback: false, // 如果訪問非定義語言，返回 404
  };
}
export async function getStaticProps({ params }) {
  console.log(params.lang);
  return {
    props: { lang: params.lang }, // 傳遞當前語系
  };
}
class Home extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {({ locale, switchLanguage }) => (
          <div>
            <h1>{translations[locale]?.welcome || "Welcome!"}</h1>
            <DeepComponent />
            <DeepClassComponent />
            <button onClick={() => switchLanguage("en")}>English</button>
            <button onClick={() => switchLanguage("zh-CN")}>繁體中文</button>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default Home;
