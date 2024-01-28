import "@/styles/globals.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from '../i18n/en.json';
import pl from '../i18n/pl.json';

const messages = {
  en,
  pl
}

function getDirection(locale) {
  return "ltr"
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  )
}
