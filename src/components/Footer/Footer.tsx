"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import { useLanguage } from "../../hooks/useLanguage";
import { useRouter } from 'next/router';

const Footer = () => {
    const [height, setHeight] = useState(0);
    const [, setWidth] = useState(0);
    const refSize = useRef(null);
    const { tString } = useTranslation(namespaces.common);
    const router = useRouter();
    const { language } = useLanguage();

    useEffect(() => {
        setWidth(refSize.current.clientWidth)
        setHeight(refSize.current.clientHeight)
    }, [])

    const handleMoveToPolicy = () => {
        router.push(`/${language}/PrivacyPolicy`);
    };
    const handleMoveToCookies = () => {
        router.push(`/${language}/cookiesPolicy`);
    };
    const handleMoveToObligation = () => {
        router.push(`/${language}/informationObligation`);
    };
    const handleMoveToFormRegulation = () => {
        router.push(`/${language}/formRegulations`);
    };


    return (
        <footer id="footer" ref={refSize} className="about-me-section max-w-screen-2xl lg:h-[704px] 3xl:w-[1440px] mx-auto flex flex-col">
            <div className="bg" style={{ height: `${height}px` }}></div>
            <div className="lg:pb-[140px] px-[16px] lg:pt-[100px] py-[64px] flex flex-col lg:gap-[80px] items-center w-full">
                <div className="flex flex-col min-w-72 flex-wrap items-center justify-between w-full mx-auto 3xl:h-[257px]">
                    <div className="md:flex md:justify-between w-full">
                        <div className="grid grid-cols-2 w-full gap-8 2xl:gap-[80px] sm:gap-6 sm:grid-cols-4 text-[#000]">
                            <div className="flex justify-start flex-col">
                                <img src="/images/logo.svg" className="w-[180px] h-[39px]" />
                            </div>
                            <div className="flex xl:justify-start flex-col">
                                <h2 className="mb-4 text-[22px] mundial-Light-font uppercase font-semibold">
                                    {tString("footer.col2Header")}
                                </h2>
                                <ul className=" font-thin">
                                    <li className="mb-4">
                                        <a
                                            className=" flex gap- text-[16px] md:text-[20px] mundial-Light-font items-center"
                                        >
                                            biuro@jofistudio.pl
                                        </a>
                                        <a className=" flex gap-2 items-center text-[16px] md:text-[20px] mundial-Light-font">{tString("footer.col2NumberMikolaj")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-start flex-col">
                                <h2 className="mb-4 text-[22px] mundial-Light-font uppercase font-semibold">
                                    {tString("footer.col3Header")}
                                </h2>
                                <ul className=" font-thin">
                                    <li className="flex flex-col gap-[12px] mb-4">
                                        <a className="flex gap-2 items-center text-[16px] md:text-[20px] mundial-Light-font">{tString("footer.col3Adress")}</a>
                                        <a
                                            href="https://maps.app.goo.gl/BcMrAZsyQZSLQbmo6"
                                            className="flex gap-2 items-center w-fit text-[16px] md:text-[20px] mundial-Light-font"
                                            style={{ borderBottom: "1px solid #000" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {tString("footer.col3Map")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-start flex-col">
                                <h2 className="mb-4 text-[22px] mundial-Light-font uppercase font-semibold">
                                    {tString("footer.col4Media")}
                                </h2>
                                <ul className=" font-thin">
                                    <li className="mb-4 flex gap-5">
                                        <a href="https://www.facebook.com/profile.php?id=61565497494822">
                                            <img src="/images/fb.png" className=" w-136 h-8" />
                                        </a>
                                        <a href="https://www.instagram.com/jofi_studio/">
                                            <img src="/images/inst.png" className=" w-136 h-8" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/jofi-studio/">
                                            <img src="/images/linkedin.png" className=" w-136 h-8" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-[22px] mundial-Light-font uppercase font-semibold">
                                    {tString("footer.col4Header")}
                                </h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="mb-4">
                                        <a href="#" className="text-[16px] md:text-[20px] mundial-Light-font">
                                            {tString("footer.col4Item1")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[16px] md:text-[20px] mundial-Light-font">
                                            {tString("footer.col4Item2")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[16px] md:text-[20px] mundial-Light-font">
                                            {tString("footer.col4Item3")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[16px] md:text-[20px] mundial-Light-font">
                                            {tString("footer.col4Item4")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center text-white font-thin">
                        <span>{tString("footer.col5Item1")}</span>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col 3xl:h-[63px] w-full md:justify-center 3xl:pt-[20px]">
                    {[{
                        onClick: handleMoveToPolicy,
                        text: tString("footer.politics")
                    }, {
                        onClick: handleMoveToCookies,
                        text: tString("footer.cookies")
                    }, {
                        onClick: handleMoveToObligation,
                        text: tString("footer.obligation")
                    }, {
                        onClick: handleMoveToFormRegulation,
                        text: tString("footer.form")
                    }].map((item, index, arr) => (
                        <div key={index} className="flex items-center" style={{ fontFamily: 'PPHatton-Light' }}>
                            <a onClick={item.onClick} className="text-black cursor-pointer hover:font-semibold text-[16px] mundial-Light-font">
                                {item.text}
                            </a>
                            {index < arr.length - 1 && <span className="mx-2 bg-black w-[1px] h-[20px]"></span>}
                        </div>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
