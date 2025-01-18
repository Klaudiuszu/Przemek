"use client";
import React from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const CookiesPolicyComponent = () => {

    const { tString } = useTranslation(namespaces.common);

    return (
        <section
        className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-4 xl:px-12 py-12 mt-24 xl:mt-0  mx-auto flex flex-col gap-8 text-white" id="cookiesPolicy"
        >
            <h1 className="flex justify-center">{tString("cookies.cookiesPolicyTitle")}</h1>
            <p className="text-xs">
                {tString("cookies.cookiesPolicyIntro")}{" "}
                <a href="www.piccka.pl" className="cursor-pointer">
                    <u>piccka.pl</u>
                </a>{" "}
                {tString("cookies.cookiesPolicyIntro2")}
            </p>
            <p className="text-xs">{tString("cookies.cookiesDefinition")}</p>
            <p className="text-xs">
                {tString("cookies.cookiesEntity")}{" "}
                <a href="www.piccka.pl" className="cursor-pointer">
                    <u>piccka.pl</u>
                </a>
            </p>
            <p className="text-xs">
                <strong>{tString("cookies.companyName")}</strong>
                {tString("cookies.companyAddress")}
            </p>

            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col text-xs">
                    <li>{tString("cookies.cookiesUsageIntro")}</li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
                    <li>{tString("cookies.cookiesUsage1")}</li>
                    <li>{tString("cookies.cookiesUsage2")}</li>
                </ul>
            </div>

            <p className="text-xs">{tString("cookies.cookiesTypesIntro")}</p>

            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col text-xs">
                    <li>{tString("cookies.cookiesTypes")}</li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
                    <li>{tString("cookies.cookiesNecessary")}</li>
                    <li>{tString("cookies.cookiesSecurity")}</li>
                    <li>{tString("cookies.cookiesPerformance")}</li>
                    <li>{tString("cookies.cookiesFunctional")}</li>
                    <li>{tString("cookies.cookiesAdvertising")}</li>
                </ul>
            </div>
            <p className="text-xs">{tString("cookies.cookiesSettings")}</p>
            <p className="text-xs">{tString("cookies.cookiesRestrictions")}</p>
            <p className="text-xs">{tString("cookies.cookiesThirdParty")}</p>
        </section>
    );
};

export default CookiesPolicyComponent;
