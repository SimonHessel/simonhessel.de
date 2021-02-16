import { appWithTranslation } from "next-i18next";
import "../styles/main.css";
import "../styles/font-awesome.min.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
