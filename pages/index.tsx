import EmailSection from "../src/components/Contact/EmailSection";
import CookieConsent from "../src/components/Footer/CookiesConsent";
import Footer from "../src/components/Footer/Footer";
import GallerySection from "../src/components/Gallery/GallerySection";
import Navbar from "../src/components/Navbar/Navbar";
import ThirdSection from "../src/components/ThirdSection/ThirdSection";

export default function Home() {

  return (
    <>
      <CookieConsent />
    <div className="w-100vw">
      <Navbar />
      <ThirdSection />
      <GallerySection />
      <EmailSection />
      <Footer />
    </div>
    </>
  );
}