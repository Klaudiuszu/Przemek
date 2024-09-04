"use client";
import React from "react";
import { namespaces } from "../../../translations.config";
import { useTranslation } from "next-translations/hooks";

const FormRegulationsDashboard = () => {

    const { tString } = useTranslation(namespaces.common);

    return (
        <section className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-8 py-28 mx-auto flex flex-col gap-8" id="privacyPolicy">
        <h1 className="flex justify-center">REGULAMIN ŚWIADCZENIA USŁUGI FORMULARZ KONTAKTOWY</h1>
      
        <p className="flex justify-center font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.generalProvisionsTitle") }}></p>
        <p className="flex justify-center italic text-center" dangerouslySetInnerHTML={{ __html: tString("formRegulations.generalProvisionsDescription") }}></p>
      
        <p className="flex justify-center font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.definitionsTitle") }}></p>
        <div className="flex gap-2 flex-col">
          <ul className="flex gap-2 flex-col">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.definitionsIntro") }}></li>
          </ul>
          <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.definition1") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.definition2") }}></li>
          </ul>
        </div>

        <p className="flex justify-center font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRulesTitle") }}></p>
        <div className="flex gap-2 flex-col">
          <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule1") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule2") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule3") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule4") }}></li>
          </ul>
        </div>
      
        <p className="flex justify-center font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUseTitle") }}></p>
        <p dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUseIntro") }}></p>
        <div className="flex gap-2 flex-col">
          <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse1") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse2") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse3") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse4") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse5") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse6") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse7") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse8") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse9") }}></li>
          </ul>
        </div>
      
        <p className="flex justify-center font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibilityTitle") }}></p>
        <div className="flex gap-2 flex-col">
          <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility1") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility2") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility3") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility4") }}></li>
          </ul>
        </div>
      
        <p className="flex justify-center font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessingTitle") }}></p>
        <div className="flex gap-2 flex-col">
          <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing1") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing2") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing3") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing4") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing5") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing6") }}></li>
          </ul>
          <ul className="pl-6 flex gap-2 flex-col list-outside list-disc">
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing7") }}></li>
            <li dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing8") }}></li>
          </ul>
        </div>
      </section>
      
    );
};

export default FormRegulationsDashboard;
