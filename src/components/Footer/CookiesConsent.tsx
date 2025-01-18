import { useState, useEffect } from 'react';
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import { useLanguage } from '../../hooks/useLanguage';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Dialog } from 'primereact/dialog';

interface CookieConsentProps { }

const CookieConsent: React.FC<CookieConsentProps> = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [analyticsCookies, setAnalyticsCookies] = useState<boolean>(false);
    const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
    const { language } = useLanguage();

    const { tString } = useTranslation(namespaces.common);

    const router = useRouter();

    const handleClick = () => {
        router.push(`/${language}/PrivacyPolicy`);
    };

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (!consent) {
            setVisible(true);
        } else {
            setAnalyticsCookies(consent === 'true');
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setAnalyticsCookies(true);
        setVisible(false);
    };

    const rejectCookies = () => {
        Cookies.set('cookieConsent', 'false', { expires: 365 });
        setAnalyticsCookies(false);
        setVisible(false);
    };

    const openSettings = () => {
        setVisible(false);
        setSettingsVisible(true);
    };

    const saveSettings = () => {
        Cookies.set('cookieConsent', analyticsCookies.toString(), { expires: 365 });
        setSettingsVisible(false);
    };

    return (
        <>
            <Dialog
                header={tString('cookiesCon.header')}
                visible={visible}
                draggable={false}
                resizable={false}
                position="bottom"
                onHide={() => setVisible(false)}
                style={{ width: '100%' }}
                className="bg-[#f1f1f1] px-5 pt-5 flex m-0 gap-8"
                footer={
                    <div className="flex flex-col md:flex-row py-4 gap-4">
                        <button
                            onClick={acceptCookies}
                            className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                        >
                            <span className="relative" style={{ top: '2px' }}>
                                {tString('cookiesCon.acceptAll')}
                            </span>
                        </button>
                        <button
                            onClick={rejectCookies}
                            className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                        >
                            <span className="relative" style={{ top: '2px' }}>
                                {tString('cookiesCon.reject')}
                            </span>
                        </button>
                        <button
                            onClick={openSettings}
                            className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                        >
                            <span className="relative" style={{ top: '2px' }}>
                                {tString('cookiesCon.settings')}
                            </span>
                        </button>
                    </div>
                }
            >
                <p>
                    {tString('cookiesCon.description')} <strong>www.piccka.pl</strong>{' '}
                    {tString('cookiesCon.description2')}{' '}
                    <a onClick={handleClick} className="cursor-pointer">
                        <u className="underline-offset-4 hover:text-stone-800">{tString('cookiesCon.privacyPolicy')}</u>
                    </a>
                </p>
            </Dialog>

            <Dialog
                header={tString('privacy.header')}
                visible={settingsVisible}
                draggable={false}
                resizable={false}
                position="center"
                onHide={() => setSettingsVisible(false)}
                style={{ width: '80%' }}
                className="flex gap-4  rounded-xl bg-[#f1f1f1] px-5 pt-5 m-0"
                footer={
                    <>
                        <div style={{ height: '1px', width: '100%', background: '#808080', opacity: '30%', marginBottom: '1rem' }}></div>
                        <div className="flex flex-row py-4 gap-4">
                            <button
                                onClick={saveSettings}
                                className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                            >
                                <span className="relative" style={{ top: '2px' }}>{tString('privacy.saveChanges')}</span>
                            </button>
                            <button
                                onClick={() => setAnalyticsCookies(true)}
                                className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                            >
                                <span className="relative" style={{ top: '2px' }}>{tString('privacy.enableAll')}</span>
                            </button>
                        </div>
                    </>
                }
            >
                <p>
                    {tString('privacy.description')}
                </p>
                <label className="inline-flex items-center pt-6 justify-between w-full">
                    <span>{tString('privacy.strictlyNecessaryCookies')}</span>
                    <div className='flex flex-row items-center'>
                        <input type="checkbox" value="" className="sr-only peer" style={{ paddingTop: '2px' }} disabled checked={analyticsCookies ? true : false}></input>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{analyticsCookies ? tString('privacy.enabled') : tString('privacy.disabled')}</span>
                    </div>
                </label>
            </Dialog>
        </>
    );
};

export default CookieConsent;
