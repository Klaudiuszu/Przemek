"use client";
import React from "react";
import { namespaces } from "../../../translations.config";
import { useTranslation } from "next-translations/hooks";

const FormRegulationsDashboard = () => {
  const { tString } = useTranslation(namespaces.common);

  return (
    <section className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-4 xl:px-12 py-12 mt-24 xl:mt-0  mx-auto flex flex-col gap-8 text-white" id="privacyPolicy">
      <h1 className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.title") }}></h1>

      <p className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.generalProvisionsTitle") }}></p>
      <p className="flex justify-center italic text-center" dangerouslySetInnerHTML={{ __html: tString("formRegulations.generalProvisionsDescription") }}></p>

      <p className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.definitionsTitle") }}></p>
      <div className="flex gap-2 flex-col">
        <ul className="flex gap-2 flex-col text-xs">
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.definitionsIntro") }}></li>
        </ul>
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.definition1") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.definition2") }}></li>
        </ul>
      </div>

      <p className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRulesTitle") }}></p>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule1") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule2") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule3") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.accessRule4") }}></li>
        </ul>
      </div>

      <p className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUseTitle") }}></p>
      <p dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUseIntro") }}></p>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse1") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse2") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse3") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse4") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse5") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse6") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse7") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.termsOfUse9") }}></li>
        </ul>
      </div>

      <p className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibilityTitle") }}></p>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility1") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility2") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility3") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.responsibility4") }}></li>
        </ul>
      </div>

      <p className="flex justify-center text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessingTitle") }}></p>
      <div className="flex gap-2 flex-col">
        <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal text-xs">
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing1") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing2") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing3") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing4") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing5") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing6") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing7") }}></li>
          <li className="text-[12px] font-thin" dangerouslySetInnerHTML={{ __html: tString("formRegulations.dataProcessing8") }}></li>
        </ul>
      </div>
    </section>
  );
};

export default FormRegulationsDashboard;
