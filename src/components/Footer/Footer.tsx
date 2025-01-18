"use client";
import React from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import { useLanguage } from "../../hooks/useLanguage";
import { useRouter } from "next/router";
import InstagramIcon from "@mui/icons-material/Instagram";
import SubHeading from "../UI/SubHeading";

const Footer = () => {
    const { tString } = useTranslation(namespaces.common);
    const router = useRouter();
    const { language } = useLanguage();

    const handleNavigation = (path) => router.push(`/${language}/${path}`);

    return (
        <footer className="w-full bg-footerBg text-primary py-12">
            <div className="max-w-screen-2xl mx-auto px-4 flex flex-col gap-12">
                <div className="flex flex-col gap-8 md:flex-row md:justify-between items-center">
                    <div className="flex justify-center md:justify-start">
                        <img src="/images/OnlyLogo.png" alt="Logo" className="md:h-24" />
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <SubHeading>{tString("footer.col2Header")}</SubHeading>
                        <p className="mt-2 text-body">{tString("footer.col2NumberMikolaj")}</p>
                        <p className="mt-1 text-body">piccka.kontakt@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <SubHeading>{tString("footer.col4Media")}</SubHeading>
                        <div className="mt-2">
                            <a href="https://www.instagram.com/piccka.yolo/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon sx={{ fontSize: 50 }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#9E2A2B] pt-12 flex flex-col md:flex-row text-sm text-center md:text-left justify-center">
                    <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
                        {[
                            { text: "footer.politics", path: "PrivacyPolicy" },
                            { text: "footer.cookies", path: "cookiesPolicy" },
                            { text: "footer.obligation", path: "informationObligation" },
                            { text: "footer.form", path: "formRegulations" }
                        ].map(({ text, path }, index) => (
                            <a key={index} onClick={() => handleNavigation(path)} className="cursor-pointer hover:underline">
                                {tString(text)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
