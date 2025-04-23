import CookiesConsent from "../src/components/Footer/CookiesConsent";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import PrivacyPolicyDashboard from "../src/components/PrivacyPolicy/PrivacyPolicyDashboard";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center w-100vw bg-orange">
        <PrivacyPolicyDashboard />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}