"use client";
import React from "react";
import { namespaces } from "../../../../translations.config";
import { useTranslation } from "next-translations/hooks";

const InformationObligationDashboard = () => {

    const { tString } = useTranslation(namespaces.common);

    return (
        <section className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-8 py-28 mx-auto flex flex-col gap-8" id="privacyPolicy">
  <h1 className="flex justify-center" dangerouslySetInnerHTML={{ __html: tString("obligation.title") }}></h1>

  <p dangerouslySetInnerHTML={{ __html: tString("obligation.description1") }}></p>
  <p dangerouslySetInnerHTML={{ __html: tString("obligation.description2") }}></p>
  <p dangerouslySetInnerHTML={{ __html: tString("obligation.contactInfo") }}></p>

  <div className="flex gap-2 flex-col">
    <ul className="flex gap-2 flex-col">
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurposeTitle") }}></li>
    </ul>
    <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurpose1") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurpose2") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurpose3") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurpose4") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurpose5") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataProcessingPurpose6") }}></li>
    </ul>

    <ul className="flex gap-2 flex-col">
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataSharingTitle") }}></li>
    </ul>
    <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataSharing1") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataSharing2") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataSharing3") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.dataRetention") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.userRights") }}></li>
    </ul>
  </div>

  <p dangerouslySetInnerHTML={{ __html: tString("obligation.cookiesInfo") }}></p>

  <div className="flex gap-2 flex-col">
    <ul className="flex gap-2 flex-col">
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.cookieTypesTitle") }}></li>
    </ul>
    <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.cookieType1") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.cookieType2") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.cookieType3") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.cookieType4") }}></li>
      <li dangerouslySetInnerHTML={{ __html: tString("obligation.cookieType5") }}></li>
    </ul>
  </div>

  <p dangerouslySetInnerHTML={{ __html: tString("obligation.cookiesSettingsInfo") }}></p>
  <p dangerouslySetInnerHTML={{ __html: tString("obligation.cookiesRestrictionsInfo") }}></p>
  <p dangerouslySetInnerHTML={{ __html: tString("obligation.cookiesAdsPartnersInfo") }}></p>
</section>

    );
};

export default InformationObligationDashboard;
