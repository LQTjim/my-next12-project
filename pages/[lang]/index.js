import React, { Component } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import DeepComponent from "../../components/DeepComponent";
import DeepClassComponent from "../../components/DeepClassComponent";
import { concatPickLangPack } from "../../langFile";

export async function getStaticPaths() {
  const locales = ["en", "zh-CN"]; // 定義語系
  const paths = locales.map((lang) => ({ params: { lang } }));

  return {
    paths,
    fallback: false, // 如果訪問非定義語言，返回 404
  };
}
export async function getStaticProps({ params }) {
  const langPack = concatPickLangPack(params.lang, ["homePage"]);
  return {
    props: { lang: params.lang, langPack }, // 傳遞當前語系
  };
}
class Home extends Component {
  componentDidMount() {
    console.log("didmount");
  }
  render() {
    return (
      <LanguageContext.Consumer>
        {({ locale, switchLanguage }) => (
          <div>
            <DeepComponent />
            {/* <DeepClassComponent /> */}
            <button onClick={() => switchLanguage("en")}>English</button>
            <button onClick={() => switchLanguage("zh-CN")}>繁體中文</button>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default Home;
