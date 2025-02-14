import React from "react";
import { LanguageContext } from "../context/LanguageContext";

export default class DeepClassComponent extends React.Component {
  static contextType = LanguageContext;
  logHello = () => {
    console.log(this.context.t("hello")); // ✅ 正確存取 context
  };

  render() {
    console.log(this.context.t, "??2?");
    const { t } = this.context;
    return (
      <div>
        <div>DeepClassComponent</div>
        <div>{t("deepClassComponent")}</div>
        <button
          onClick={() => {
            this.logHello();
          }}
        >
          test
        </button>
      </div>
    );
  }
}
