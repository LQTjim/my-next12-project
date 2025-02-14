import App from "next/app";
import LanguageProvider from "../context/LanguageContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log(pageProps, 999999);
    return (
      <LanguageProvider lang={pageProps.lang}>
        <Component {...pageProps} />
      </LanguageProvider>
    );
  }
}

export default MyApp;
