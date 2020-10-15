import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);
  function t<T = string>(key: string): T {
    if (!localization.translations[key]) {
      console.warn(
        `Translation '${key}' for locale '${localization.locale}' not found.`
      );
    }
    return ((localization.translations[key] || null) as any) as T;
  }

  return {
    t,
    locale: localization.locale,
  };
}
