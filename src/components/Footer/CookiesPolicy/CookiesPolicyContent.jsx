"use client";
import React from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../../translations.config";

const CookiesPolicyComponent = () => {

    const { tString } = useTranslation(namespaces.common);

    return (
        <section
            className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-8 py-28 mx-auto flex flex-col gap-8"
            id="privacyPolicy"
        >
            <h1 className="flex justify-center">{tString("cookies.cookiesPolicyTitle")}</h1>
            <p>
                {tString("cookies.cookiesPolicyIntro")}{" "}
                <a href="www.jofistudio.pl" className="cursor-pointer">
                    <u>jofistudio.pl</u>
                </a>{" "}
                {tString("cookies.cookiesPolicyIntro2")}
            </p>
            <p>{tString("cookies.cookiesDefinition")}</p>
            <p>
                {tString("cookies.cookiesEntity")}{" "}
                <a href="www.jofistudio.pl" className="cursor-pointer">
                    <u>jofistudio.pl</u>
                </a>
            </p>
            <p>
                <strong>{tString("cookies.companyName")}</strong>
                {tString("cookies.companyAddress")}
            </p>

            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col">
                    <li>{tString("cookies.cookiesUsageIntro")}</li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li>{tString("cookies.cookiesUsage1")}</li>
                    <li>{tString("cookies.cookiesUsage2")}</li>
                </ul>
            </div>

            <p>{tString("cookies.cookiesTypesIntro")}</p>

            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col">
                    <li>{tString("cookies.cookiesTypes")}</li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li>{tString("cookies.cookiesNecessary")}</li>
                    <li>{tString("cookies.cookiesSecurity")}</li>
                    <li>{tString("cookies.cookiesPerformance")}</li>
                    <li>{tString("cookies.cookiesFunctional")}</li>
                    <li>{tString("cookies.cookiesAdvertising")}</li>
                </ul>
            </div>
            <p>{tString("cookies.cookiesSettings")}</p>
            <p>{tString("cookies.cookiesRestrictions")}</p>
            <p>{tString("cookies.cookiesThirdParty")}</p>
        </section>
    );
};

export default CookiesPolicyComponent;
