import Footer from "../../src/components/Footer/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import CookiesPolicyContent from "../../src/components/CookiesPolicy/CookiesPolicyContent";
import CookiesConsent from "../../src/components/Footer/CookiesConsent";


export { getStaticPaths } from "next-translations";

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

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: { ...translationsProps }
  }
};
