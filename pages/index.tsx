import EmailSection from "../src/components/Contact/EmailSection";
import CookieConsent from "../src/components/Footer/CookiesConsent";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import FirstSection from "../src/components/FirstSection/FirstSection";

export default function Home() {

  return (
    <>
      <CookieConsent />
    <div className="w-100vw">
      <Navbar />
      <FirstSection />
      <EmailSection />
      <Footer />
    </div>
    </>
  );
}