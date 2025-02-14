import React, { Component, createContext, useContext } from "react";
import { withRouter } from "next/router";
import { getTranslation } from "../langFile/lang";

const LanguageContext = createContext();
  
class LanguageProvider extends Component {
  constructor(props) {
    console.log(Object.keys(props), "7788");
    super(props);
    this.state = {
      locale: props.lang,
    };
  }

  switchLanguage = (lang) => {
    const { router } = this.props;
    router.push(lang);
    this.setState({ locale: lang });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          locale: this.state.locale,
          switchLanguage: this.switchLanguage,
          t: (key) => getTranslation(this.props.langPack, key), // 透過 t() 取得翻譯
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
export const useLanguage = () => useContext(LanguageContext);
export { LanguageContext };
export default withRouter(LanguageProvider);
