import Footer from "../../src/components/Footer/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import FirstSection from "../../src/components/FirstSection/FirstSection";
import SecondSection from "../../src/components/SecondSection/SecondSection";
import EmailSection from "../../src/components/Contact/EmailSection";
// import CookiesConsent from "../../src/components/CookiesConsent";
// import EmailSection from "../../src/components/EmailSection";

export { getStaticPaths } from "next-translations";


export default function Home() {

  return (
    <div className="w-100vw">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <EmailSection />
      <Footer />
    </div>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: { ...translationsProps }
  }
};

