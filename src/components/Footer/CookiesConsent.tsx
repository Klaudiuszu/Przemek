import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Dialog } from "primereact/dialog";

interface CookieConsentProps {}

const CookieConsent: React.FC<CookieConsentProps> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [analyticsCookies, setAnalyticsCookies] = useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/PrivacyPolicy`);
  };

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else {
      setAnalyticsCookies(consent === "true");
    }
  }, []);

  useEffect(() => {
    if (visible || settingsVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible, settingsVisible]);
  

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setAnalyticsCookies(true);
    setVisible(false);
  };

  const rejectCookies = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setAnalyticsCookies(false);
    setVisible(false);
  };

  const openSettings = () => {
    setVisible(false);
    setSettingsVisible(true);
  };

  const saveSettings = () => {
    Cookies.set("cookieConsent", analyticsCookies.toString(), { expires: 365 });
    setSettingsVisible(false);
  };

  return (
    <>
    </>
  );
};

export default CookieConsent;
