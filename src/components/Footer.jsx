"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";

const Footer = () => {
    const [width, setWidth] = useState(0);
    const refWidth = useRef(null);
    const { tString } = useTranslation(namespaces.common);

    useEffect(() => {
        setWidth(refWidth.current.clientWidth)
    }, [])

    return (
        <footer id='footer' ref={refWidth} className="bg-black flex flex-col w-full">
            <div className="flex flex-col min-w-72	flex-wrap items-center justify-between mx-auto pt-3">
                <div className="md:flex md:justify-between px-3">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">{tString('footer.col1Header')}</h2>
                            <ul className="text-white font-thin">
                                <li className="mb-4">
                                    <a href="https://www.google.com/maps/dir/Rozbrat+34%2F36,+Warszawa//@52.226312,21.0318993,17z/data=!4m9!4m8!1m5!1m1!1s0x471eccfc4829fe67:0xe2c2ba714d89cb90!2m2!1d21.0344742!2d52.2263087!1m0!3e0?entry=ttu" className="hover:underline flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        {tString('footer.col1Adres')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-medium text-white uppercase">{tString('footer.col2Header')}</h2>
                            <ul className="text-white font-thin flex flex-col gap-2">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                        +48 000 000 000
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        mail.1@studio.pl
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        mail.2@studio.pl
                                    </a>
                                </li>
                                <li className="flex ">
                                <a href="#" className="flex text-white hover:text-gray-300">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 ms-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                    <span className="sr-only">Linkedin</span>
                                </a>


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            </div>
            <div className="flex justify-center relative">
                <div className="py-6 bg-[#383838] px-3 md:flex md:items-center w-full md:justify-between">
                </div>
                <div className="absolute py-4 h-12 top-0 flex items-center z-2 px-3 md:flex md:items-center w-full md:justify-between max-w-screen-2xl">
                    <div className="sm:flex sm:items-center sm:justify-end justify-center w-full">
                        <div className="flex sm:justify-center sm:mt-0 items-center text-xs max-h-12">
                            <a href="#" className="text-white hover:text-gray-300">
                                <span className="px-2">{tString('footer.bottomPolitic')}</span>
                            </a>
                            <a href="#" className="flex text-white hover:text-gray-300">
                                <span className="px-2">{tString('footer.bottomCookie')}</span>
                            </a>
                            <a href="#" className="flex text-white hover:text-gray-300">
                                <span className="px-2">{tString('footer.bottomInfo')}</span>
                            </a>
                            {/* <a href="#" className="flex text-white hover:text-gray-300">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                                <span className="sr-only">Linkedin</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;