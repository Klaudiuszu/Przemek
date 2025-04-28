import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import Link from "next/link";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (consent === undefined) {
      setVisible(true);
    } else {
      setAnalyticsEnabled(consent === "true");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = (visible || settingsVisible) ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [visible, settingsVisible]);

  const handleAccept = (analytics: boolean) => {
    Cookies.set("cookieConsent", String(analytics), { expires: 365, sameSite: "strict" });
    setAnalyticsEnabled(analytics);
    setVisible(false);
    initializeAnalytics(analytics);
  };

  const initializeAnalytics = (enabled: boolean) => {
    if (enabled && process.env.NODE_ENV === "production") {
      console.log("Analytics initialized");
    }
  };

  const openSettings = () => {
    setVisible(false);
    setSettingsVisible(true);
  };

  const footerContent = (
    <div className="flex flex-wrap justify-between gap-2 mt-4 px-4 pb-4">
      <Button 
        label="Zaakceptuj niezbędne" 
        className="p-button-text text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg" 
        onClick={() => handleAccept(false)} 
      />
      <Button 
        label="Zaakceptuj wszystkie" 
        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg border-none"
        onClick={() => handleAccept(true)} 
      />
    </div>
  );

  const settingsFooter = (
    <div className="flex justify-end gap-2 px-6 pb-6">
      <Button 
        label="Anuluj" 
        className="p-button-text text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg" 
        onClick={() => setSettingsVisible(false)} 
      />
      <Button 
        label="Zapisz ustawienia" 
        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg border-none"
        onClick={() => {
          handleAccept(analyticsEnabled);
          setSettingsVisible(false);
        }} 
      />
    </div>
  );

  if (!visible && !settingsVisible) return null;

  return (
    <>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={footerContent}
        className="max-w-md bg-white rounded-xl shadow-xl"
        closable={false}
        modal
        contentClassName="p-0"
      >
        <div className="p-6 bg-white rounded-t-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Cookies na naszej stronie</h3>
          <p className="text-gray-600 mb-4">
            Używamy plików cookies, aby zapewnić prawidłowe działanie strony oraz do celów analitycznych. 
            Szczegóły znajdziesz w naszej <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Polityce Prywatności</Link>.
          </p>
          <button 
            onClick={openSettings}
            className="text-primary hover:text-primary-dark font-medium text-sm mt-2 underline"
          >
            Ustawienia zaawansowane →
          </button>
        </div>
      </Dialog>

      <Dialog
        visible={settingsVisible}
        onHide={() => setSettingsVisible(false)}
        footer={settingsFooter}
        className="max-w-md bg-white rounded-xl shadow-xl"
        header="Ustawienia cookies"
        headerClassName="border-b border-gray-200 p-6"
        modal
        contentClassName="p-0"
      >
        <div className="space-y-4 p-6">
          <div className="flex items-start">
            <Checkbox
              inputId="necessary"
              checked
              disabled
              className="mr-3 mt-1"
            />
            <label htmlFor="necessary" className="text-gray-700">
              <span className="block font-medium">Cookies niezbędne</span>
              <span className="block text-sm text-gray-500 mt-1">(zawsze aktywne, wymagane do działania strony)</span>
            </label>
          </div>
          <div className="flex items-start pt-4 border-t border-gray-100">
            <Checkbox
              inputId="analytics"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.checked)}
              className="mr-3 mt-1"
            />
            <label htmlFor="analytics" className="text-gray-700">
              <span className="block font-medium">Cookies analityczne</span>
              <span className="block text-sm text-gray-500 mt-1">
                Pomagają nam zrozumieć, jak korzystasz z naszej strony poprzez zbieranie anonimowych danych
              </span>
            </label>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CookieConsent;