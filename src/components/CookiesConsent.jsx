import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputSwitch } from "primereact/inputswitch";
import { useLanguage } from '../hooks/useLanguage';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);
    const [analyticsCookies, setAnalyticsCookies] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);
    const { language } = useLanguage();

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
                header="Ustawienia cookies"
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
                                Akceptuj wszystkie
                            </span>
                        </button>
                        <button
                            onClick={rejectCookies}
                            className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                        >
                            <span className="relative" style={{ top: '2px' }}>
                                Odrzuć
                            </span>
                        </button>
                        <button
                            onClick={openSettings}
                            className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                        >
                            <span className="relative" style={{ top: '2px' }}>
                                Ustawienia
                            </span>
                        </button>
                    </div>
                }
            >
                <p>
                    Strona <strong>www.jofistudio.pl</strong> używa plików cookies i podobnych technologii, aby zapewnić najlepszą jakość korzystania z naszej witryny. Każdy użytkownik może samodzielnie zmienić ustawienia dotyczące cookies w swojej przeglądarce internetowej. Korzystanie z niniejszej strony bez zmiany ustawień przeglądarki oznacza, że będą one umieszczane w urządzeniu końcowym. Szczegóły znajdują się w{' '}
                    <a onClick={handleClick} className="cursor-pointer">
                        <u className="underline-offset-4 hover:text-stone-800">Polityce Prywatności</u>
                    </a>
                </p>
            </Dialog>

            <Dialog
                header="Przegląd prywatności"
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
                                <span className="relative" style={{ top: '2px' }}>Zapisz zmiany</span>
                            </button>
                            <button
                                onClick={() => setAnalyticsCookies(true)}
                                className="flex justify-start gap-4 items-center sm:w-[394px] h-[72px] text-black text-dark font-medium py-2.5 px-5 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] w-full bg-primary-500 focus:ring-4 uppercase"
                            >
                                <span className="relative" style={{ top: '2px' }}>Włącz wszystkie</span>
                            </button>
                        </div>
                    </>
                }
            >
                <p>
                    Strona <strong>www.jofistudio.pl</strong> używa plików cookies i podobnych technologii w celach: rozpoznawania urządzenia używanego przez użytkownika w celu odpowiedniego wyświetlenia zawartości strony, tworzenia statystyk, które pomagają zrozumieć w jaki sposób użytkownicy korzystają ze stron internetowych, co umożliwia ulepszenie ich struktury i zawartości, utrzymania sesji użytkownika Strony, dzięki której użytkownik nie musi na każdej podstronie ponownie wpisywać np. loginu i hasła lub innych danych, dostosowania zawartości i funkcjonalności Strony poprzez dopasowanie anonimowego, losowo wygenerowanego identyfikatora śledzącego, dzięki któremu możliwe jest między innymi sprawdzenie, skąd pochodzi użytkownik, z jakiej wyszukiwarki skorzystał, jaki link kliknął, jakie słowa kluczowe wpisał oraz w którym momencie przestał korzystać z Portalu. Każdy użytkownik może samodzielnie zmienić ustawienia dotyczące cookies w swojej przeglądarce internetowej. Korzystanie z niniejszej strony bez zmiany ustawień przeglądarki oznacza, że będą one umieszczane w urządzeniu końcowym. Szczegóły znajdują się w Polityce Prywatności.
                </p>
                <label class="inline-flex items-center pt-6 justify-between w-full">
                    <span>Ściśle niezbędne ciasteczka</span>
                    <div className='flex flex-row items-center'>
                    <input type="checkbox" value="" class="sr-only peer" style={{paddingTop: '2px'}} disabled checked={analyticsCookies ? true : false} ></input>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{analyticsCookies ? 'Włączone' : 'Wyłączone'}</span>
                    </div>
                </label>
                <>
                </>
            </Dialog>
        </>
    );
};

export default CookieConsent;
