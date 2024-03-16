import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/router";
import { defaultLocale } from "../../src/constants/languages";
import { validLink } from 'next-translations/redirects';

export const LanguageContext = createContext({
    language: defaultLocale,
    handleChangeLanguage: () => { },
});

const LanguageContextProvider = ({ children }) => {
    const [languageDetect, setLanguageDetect] =
        useState(defaultLocale);
    const router = useRouter();
    const currentUrl = router.asPath;

    useEffect(() => {
        let selectedLng = defaultLocale;
        const queryToValid = router.query?.['locale'];
        if (typeof queryToValid === "string") {
            selectedLng = queryToValid;
        }
        if (selectedLng) {
            setLanguageDetect(selectedLng);
        }
    }, [router.asPath]);

const handleChangeLanguage = (lng) => {
    setLanguageDetect(lng);
    const match = currentUrl.match(/\/(?:en|pl)\/?(.*)/);
    const pathAfterLocale = match ? '/' + match[1] : '';

    const result = validLink({
        isLoggedUser: false,
        locale: lng,
        path: pathAfterLocale || '/',
        router: router,
    });
    router.push(result);
};

    const contextValues = {
        language: languageDetect,
        handleChangeLanguage: handleChangeLanguage,
    };

    return (
        <LanguageContext.Provider value={contextValues}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;