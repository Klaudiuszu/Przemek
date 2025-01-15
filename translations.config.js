const namespaces = {
    common: "common",
    // errors: "errors",
};

module.exports = {
    locales: ["pl", "en"],
    defaultLocale: "en",
    defaultLocaleWithMultirouting: true,
    sitesForLoggedUser: [], 
    sitedForLoggedAndNotLoggedUser: [],
    redirectForLoggedUser: "/",
    redirectForNotLoggedUser: "/",
    errorPagePath: "/404",
    outputFolderTranslations: "/public/locales",
    constNamespaces: [namespaces.common, namespaces.errors],
    componentNameToReplaced: "TComponent",
    namespaces,
};