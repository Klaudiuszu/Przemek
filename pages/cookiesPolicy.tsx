import CookiesPolicyContent from "../src/components/CookiesPolicy/CookiesPolicyContent";
import CookiesConsent from "../src/components/Footer/CookiesConsent";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center w-100vw bg-orange">
        <CookiesPolicyContent />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}
