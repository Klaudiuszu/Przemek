"use client";
import React from "react";
import { namespaces } from "../../../translations.config";
import { useTranslation } from "next-translations/hooks";

const PrivacyPolicyContent = () => {

    const { tString } = useTranslation(namespaces.common);


    return (
        <section className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-8 py-28  mx-auto flex flex-col gap-8" id="privacyPolicy">
            <h1 className="flex justify-center" dangerouslySetInnerHTML={{ __html: tString("policy.header") }}></h1>
            <p dangerouslySetInnerHTML={{ __html: tString("policy.introduction") }}></p>
            <h4 className="font-bold flex justify-center" dangerouslySetInnerHTML={{ __html: tString("policy.title1") }}></h4>
            <div className="flex gap-2 flex-col">
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.administrator") }}></li>
                    <li>
                        <span dangerouslySetInnerHTML={{ __html: tString("policy.administratorA") }}></span>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: tString("policy.administratorContact") }}></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h4 className="font-bold flex justify-center" dangerouslySetInnerHTML={{ __html: tString("policy.title2") }}></h4>
            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principleIntro") }}></li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle1") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle2") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle3") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle4") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle5") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle6") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle7") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.principle8") }}></li>
                </ul>
            </div>

            <h4 className="font-bold flex justify-center" dangerouslySetInnerHTML={{ __html: tString("policy.title3") }}></h4>
            <div className="flex gap-2 flex-col">
                <ul className="list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purposeIntro") }}></li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose1") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose2") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose3") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose4") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose5") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose6") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose7") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose8") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.purpose9") }}></li>
                </ul>
                <ul>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.scopeIntro") }}></li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.scope1") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.scope2") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.scope3") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.scope4") }}></li>
                </ul>
            </div>

            <h4 className="font-bold flex justify-center" dangerouslySetInnerHTML={{ __html: tString("policy.title4") }}></h4>
            <div className="flex gap-2 flex-col">
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.profileIntro1") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.profileIntro2") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.profileIntro3") }}></li>
                </ul>
            </div>

            <h4 className="font-bold flex justify-center" dangerouslySetInnerHTML={{ __html: tString("policy.title5") }}></h4>
            <div className="flex gap-6 flex-col">
                <ul className="list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipientIntro") }}></li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient1") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient2") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient3") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient4") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient5") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient6") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.recipient7") }}></li>
                </ul>
                <ul>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.transferIntro") }}></li>
                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.transfer1") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.transfer2") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.transfer3") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.transfer4") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: tString("policy.transfer5") }}></li>
                </ul>
            </div>


            <h4 className="font-bold flex justify-center">{tString('policy.title6')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.storageIntro1')}</li>
          <li>{tString('policy.storageIntro2')}</li>
        </ul>
      </div>
      <h4 className="font-bold flex justify-center">{tString('policy.title7')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="list-outside list-decimal">
          <li>{tString('policy.userRightsIntro')}</li>
        </ul>
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.userRight1')}</li>
          <li>{tString('policy.userRight2')}</li>
          <li>{tString('policy.userRight3')}</li>
          <li>{tString('policy.userRight4')}</li>
        </ul>
        <ul className="list-outside list-decimal">
          <li className="list-none"></li>
          <li>{tString('policy.userRightsOutro1')}</li>
          <li dangerouslySetInnerHTML={{ __html: tString('policy.userRightsOutro2') }} />
        </ul>
      </div>
      <h4 className="font-bold flex justify-center">{tString('policy.title8')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.cookiesInfo1')}</li>
          <li>{tString('policy.cookiesInfo2')}</li>
          <li>{tString('policy.cookiesInfo3')}</li>
          <li>{tString('policy.cookiesInfo4')}</li>
          <li>{tString('policy.cookiesInfo5')}</li>
          <li>{tString('policy.cookiesInfo6')}</li>
          <li>{tString('policy.cookiesInfo7')}</li>
          <li>{tString('policy.cookiesInfo8')}</li>
        </ul>
      </div>
      <h4 className="font-bold flex justify-center">{tString('policy.title9')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.cookiesPurpose1')}</li>
          <li>{tString('policy.cookiesPurpose2')}</li>
          <li>{tString('policy.cookiesPurpose3')}</li>
          <li>{tString('policy.cookiesPurpose4')}</li>
          <li>{tString('policy.cookiesPurpose5')}</li>
          <li>{tString('policy.cookiesPurpose6')}</li>
          <li>{tString('policy.cookiesPurpose7')}</li>
          <li>{tString('policy.cookiesPurpose8')}</li>
        </ul>
      </div>
      <h4 className="font-bold flex justify-center">{tString('policy.title10')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.cookiesTech1')}</li>
          <li>{tString('policy.cookiesTech2')}</li>
          <li>{tString('policy.cookiesTech3')}</li>
          <li>{tString('policy.cookiesTech4')}</li>
          <li>{tString('policy.cookiesTech5')}</li>
        </ul>
      </div>
      <h4 className="font-bold flex justify-center">{tString('policy.title11')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.cookiesAnalytical1')}</li>
          <li>{tString('policy.cookiesAnalytical2')}</li>
          <li>{tString('policy.cookiesAnalytical3')}</li>
          <li>{tString('policy.cookiesAnalytical4')}</li>
          <li>{tString('policy.cookiesAnalytical5')}</li>
        </ul>
      </div>
      <h4 className="font-bold flex justify-center">{tString('policy.title12')}</h4>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
          <li>{tString('policy.cookiesMarketing1')}</li>
          <li>{tString('policy.cookiesMarketing2')}</li>
          <li>{tString('policy.cookiesMarketing3')}</li>
          <li>{tString('policy.cookiesMarketing4')}</li>
          <li>{tString('policy.cookiesMarketing5')}</li>
        </ul>
      </div>

        </section>
    );
};

export default PrivacyPolicyContent;
