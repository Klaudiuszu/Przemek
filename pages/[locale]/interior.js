import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import InteriorSection from "../../src/components/interiorPage/InteriorSection";
import Consultation from "../../src/components/architecturePage/Consultation";
import { getTranslationsProps } from "next-translations";
import { namespaces } from '../../src/constants/namespaces';
import CookiesConsent from "../../src/components/CookiesConsent";
import FillarSection from "../../src/components/architecturePage/FillarsSection";
import InteriorOffer from "../../src/components/interiorPage/InteriorOffer";

export { getStaticPaths } from "next-translations";

export default function Interior() {

  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between xs:w xl:px-24 my-12'>
        <InteriorSection />
        <InteriorOffer />
        <FillarSection />
        <Consultation />
      </main>
      <CookiesConsent />
      <Footer />
    </>
  );
}

export const getStaticProps = async ctx => {
  const translationsProps = await getTranslationsProps(ctx, [namespaces.common])
  return {
    props: {...translationsProps}
  }
};