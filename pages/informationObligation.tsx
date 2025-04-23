import CookiesConsent from "../src/components/Footer/CookiesConsent";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";

export default function InformationObligation() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center w-100vw bg-orange">
        <InformationObligation />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}
